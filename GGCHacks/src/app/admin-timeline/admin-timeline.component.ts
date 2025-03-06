import { Component, OnInit } from '@angular/core';
import { TimelineService, TimelineEvent } from '../services/timeline.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-timeline',
  templateUrl: './admin-timeline.component.html',
  styleUrls: ['./admin-timeline.component.css']
})
export class AdminTimelineComponent implements OnInit {
  events: TimelineEvent[] = [];
  selectedEvent: TimelineEvent | null = null;
  eventForm: FormGroup;
  
  constructor(
    private timelineService: TimelineService,
    private fb: FormBuilder
  ) {
    // Create a reactive form for both creating and editing events.
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      location: [''],
      description: [''],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    // Subscribe to the list of events.
    this.timelineService.getEvents().subscribe(events => {
      this.events = events;
    });
  }
  
  onSubmit(): void {
    if (this.eventForm.invalid) return;
    
    const formValue = this.eventForm.value;
    
    // If editing an existing event, update it.
    if (this.selectedEvent) {
      this.timelineService.updateEvent(this.selectedEvent.documentID, formValue)
        .then(() => {
          this.eventForm.reset();
          this.selectedEvent = null;
        })
        .catch(error => console.error('Update error:', error));
    } else {
      // Otherwise, create a new event.
      this.timelineService.addEvent(formValue)
        .then(() => this.eventForm.reset())
        .catch(error => console.error('Creation error:', error));
    }
  }
  
  onEdit(event: TimelineEvent): void {
    this.selectedEvent = event;
    
    // Convert startTime and endTime to Date objects if necessary.
    const start: Date = event.startTime instanceof Date ? event.startTime : event.startTime.toDate();
    const end: Date = event.endTime instanceof Date ? event.endTime : event.endTime.toDate();
    
    // Patch the form with the event details.
    this.eventForm.patchValue({
      title: event.title,
      location: event.location,
      description: event.description,
      startTime: this.formatDateForInput(start),
      endTime: this.formatDateForInput(end)
    });
  }
  
  onDelete(event: TimelineEvent): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.timelineService.deleteEvent(event.documentID)
        .catch(error => console.error('Delete error:', error));
    }
  }
  
  onCancel(): void {
    this.selectedEvent = null;
    this.eventForm.reset();
  }
  
  concludeDay(): void {
    // First confirmation
    if (confirm("Are you sure you want to conclude the day? This will permanently delete all events.")) {
      // Second confirmation
      if (confirm("This action cannot be undone. Are you really sure you want to conclude the day?")) {
        // Delete all events by iterating over the current events array.
        const deletionPromises = this.events.map(event =>
          this.timelineService.deleteEvent(event.documentID)
        );
        Promise.all(deletionPromises)
          .then(() => {
            alert("All events have been deleted. Day concluded.");
          })
          .catch(error => {
            console.error("Error deleting events:", error);
            alert("An error occurred while deleting events.");
          });
      }
    }
  }
  
  // Helper function to format a Date for a datetime-local input.
  private formatDateForInput(date: Date): string {
    const pad = (n: number) => n < 10 ? '0' + n : n;
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }
}
