import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from "../../services/event.services";
import { Event } from "../../EventCalendarStuff/event";
import firebase from "firebase/compat";
import { AuthService } from "../../services/auth.service";
import auth = firebase.auth;
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EditEventModalComponent } from "../edit-event-modal/edit-event-modal.component";


@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.css'],
})
export class EventCreatorComponent {
  newEvent: Event = {
    id: '',
    title: '',
    startTime: '',
    endTime: '',
    day: '',
  }

  isCreatingEvent = false;
  userId: string = '';
  events: Event[] = [];

  constructor(private afAuth: AngularFireAuth, private eventService: EventService, private modalService: NgbModal, public auth: AuthService) {
    this.afAuth.user.subscribe(user => {
      if (user) {
        this.userId = user.uid;
      }
    })
  }

  createEvent(): void {
    // Validate form inputs
    if (!this.newEvent.title || !this.newEvent.startTime || !this.newEvent.endTime || !this.newEvent.day) {
      alert('Please fill out all fields.');
      return;
    }

    // Call the addEvent() method from EventService
    this.eventService.addEvent(
      this.newEvent.title,
      this.newEvent.startTime,
      this.newEvent.endTime,
      this.newEvent.day
    );

    // Reset form fields after creating an event
    this.newEvent = {
      id: '',
      title: '',
      startTime: '',
      endTime: '',
      day: '',
    };

    // update the local events array
    alert('Event created successfully');
    this.fetchEvents(); // Replace or update this logic if needed
  }


  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    })
  }

  fetchEvents(): void {
    this.eventService.getEvents().subscribe((retrievedEvents: Event[]) => {
      this.events = retrievedEvents;
    });
  }

  editEvent(event: Event): void {
    const modalRef = this.modalService.open(EditEventModalComponent, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.componentInstance.eventToEdit = { ...event };
    modalRef.result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${reason}`);
    });
  }

  deleteEvent(event: Event): void {
    if (confirm("Are you sure you want to delete this event?")) {
      this.eventService.deleteEvent(event);
    }
  }
}
