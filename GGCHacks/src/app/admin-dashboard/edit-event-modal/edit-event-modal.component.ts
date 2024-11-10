import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from "../../services/event.services";
import { Event } from "../../EventCalendarStuff/event";

@Component({
  selector: 'app-edit-event-modal',
  templateUrl: './edit-event-modal.component.html',
  styleUrls: ['./edit-event-modal.component.css']
})

export class EditEventModalComponent implements OnInit {
  @Input() eventToEdit: Event;
  editEventForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private eventService: EventService) { }

  ngOnInit() {
    this.editEventForm = new FormGroup({
      title: new FormControl(this.eventToEdit.title),
      startTime: new FormControl(this.eventToEdit.startTime),
      endTime: new FormControl(this.eventToEdit.endTime),
      day: new FormControl(this.eventToEdit.day)
    });
  }

  save(): void {
    this.eventToEdit.title = this.editEventForm.value.title;
    this.eventToEdit.startTime = this.editEventForm.value.startTime;
    this.eventToEdit.endTime = this.editEventForm.value.endTime;
    this.eventToEdit.day = this.editEventForm.value.day;
    this.eventService.editEvent(this.eventToEdit);
    this.activeModal.close();
  }
}
