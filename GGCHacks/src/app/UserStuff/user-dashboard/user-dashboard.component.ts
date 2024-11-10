import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { User } from '../../interfaces/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EventService } from "../../services/event.services";
import { Event } from "../../EventCalendarStuff/event";
import * as events from "events";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  isEditing: boolean;
  events: Event[] = [];

  constructor(public auth: AuthService, private fb: FormBuilder, private eventService: EventService) {
    this.isEditing = false;
  }

  ngOnInit(): void {
    this.isEditing = false;
    this.fetchEvents();
  }

  fetchEvents(): void {
    // Subscribe to the EventService to get events
    this.eventService.getEvents().subscribe(events => {
      this.events = events;  // Assign fetched events to the events array
    });
  }

  async submit() {
    this.auth.updateUser();
  }

  isRegisteredForCurrentYear(user: User): boolean {
    return (user.registeredFor.includes(new Date().getFullYear()));
  }
}
