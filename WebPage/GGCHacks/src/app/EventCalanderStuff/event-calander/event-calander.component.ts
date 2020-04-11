import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Event} from '../event';
import TreeMap from 'ts-treemap';
import {AuthService} from '../../services/auth.service';
import {range, Subscription} from 'rxjs';
import set = Reflect.set;
import {CalanderServiceService} from '../calander-service.service';

@Component({
  selector: 'app-event-calander',
  templateUrl: './event-calander.component.html',
  styleUrls: ['./event-calander.component.css']
})
export class EventCalanderComponent {
  isEditing: boolean;
  tempEvent: Event;
  days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  constructor(public eventSer: CalanderServiceService, public auth: AuthService) {
    this.tempEvent = new Event();
  }


}
