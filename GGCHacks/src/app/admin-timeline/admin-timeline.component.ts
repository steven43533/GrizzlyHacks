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
    // Create the reactive form for events.
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
    const eventData = this.eventForm.value;
    
    // If editing an existing event, update it.
    if (this.selectedEvent) {
      this.timelineService.updateEvent(this.selectedEvent.documentID, eventData)
        .then(() => {
          this.eventForm.reset();
          this.selectedEvent = null;
        })
        .catch(error => console.error('Update error:', error));
    } else {
      // Otherwise, create a new event.
      this.timelineService.addEvent(eventData)
        .then(() => this.eventForm.reset())
        .catch(error => console.error('Creation error:', error));
    }
  }
  
  onEdit(event: TimelineEvent): void {
    this.selectedEvent = event;
    // Pre-fill the form with the event data.
    this.eventForm.patchValue({
      title: event.title,
      location: event.location,
      description: event.description,
      // Assuming event.startTime and event.endTime are Date objects.
      startTime: this.formatDateForInput(event.startTime.toDate()),
      endTime: this.formatDateForInput(event.endTime.toDate())
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
  
  // Utility to format Date into a string acceptable for datetime-local inputs.
  private formatDateForInput(date: Date): string {
    const pad = (n: number) => n < 10 ? '0' + n : n;
    return `${date.getFullYear()}-${pad(date.getMonth()+1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }
}
