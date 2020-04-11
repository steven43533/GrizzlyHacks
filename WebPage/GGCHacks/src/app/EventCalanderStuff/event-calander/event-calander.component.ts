import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Event} from '../event';
import TreeMap from 'ts-treemap';
import {AuthService} from '../../services/auth.service';
import {of} from 'rxjs';
import {Time} from '@angular/common';

@Component({
  selector: 'app-event-calander',
  templateUrl: './event-calander.component.html',
  styleUrls: ['./event-calander.component.css']
})
export class EventCalanderComponent implements OnInit {

  days: TreeMap<string, Event[]>;
  isEditing: boolean;

  constructor(private afs: AngularFirestore, public auth: AuthService) {
    this.days = new TreeMap< string, Event[]>(((a, b) => this.compare(a, b)));
    afs.collection<Event>(`events`).valueChanges( ).subscribe(events => this.createEvents(events));
  }

  ngOnInit(): void {
  }


  createEvents(events: Event[]) {
    events.forEach( event => {
      if (this.days.has(event.day)) {
        this.days.get(event.day).concat(event);
      } else {
        this.days.set(event.day, [event]);
        console.log(this.days);
      }
    });
    for ( const k  of this.days.keys()) {
      this.days.get(k).sort( (e1, e2) => {

      });
    }
    console.log(this.days);

  }

  updateEvent(e: Event) {
    const ref: AngularFirestoreDocument = this.afs.doc(`events/${e.id}`);
    const data = {
      id: e.id,
      title: e.title,
      startTime: e.startTime,
      endTime: e.endTime,
      day: e.day
    }
    ref.update(data);
  }


  // just the raw data of the event
  createEvent(e: Event) {
    e.id = this.afs.createId();
    const ref: AngularFirestoreDocument = this.afs.doc(`events/${e.id}`);


    const data = {
      id: e.id,
      title: e.title,
      startTime: e.startTime,
      endTime: e.endTime,
      day: e.day
    }

    ref.set(data, {merge: true});
  }


  testAdd() {
    const e = new Event();
    e.title = 'asda';
    e.day = 'tuesday';
    this.createEvent(e);
  }


  compare( a: string,  b: string) {
    let aa = 7;
    let bb = 7;
    a = a.toLocaleLowerCase();
    if (a === 'monday') {
      aa = 0;
    } else if (a === 'tuesday') {
      aa = 1;
    } else if (a === 'wednesday') {
      aa = 2;
    } else if (a === 'thursday') {
      aa = 3;
    } else if (a === 'friday') {
      aa = 4;
    } else if (a === 'saturday') {
      aa = 5;
    } else if (a === 'sunday') {
      aa = 6;
    }

    if (b === 'monday') {
      bb = 0;
    } else if (b === 'tuesday') {
      bb = 1;
    } else if (b === 'wednesday') {
      bb = 2;
    } else if (b === 'thursday') {
      bb = 3;
    } else if (b === 'friday') {
      bb = 4;
    } else if (b === 'saturday') {
      bb = 5;
    } else if (b === 'sunday') {
      bb = 6;
    }
    return (aa - bb);
  }

  timeCompare(t1: string, t2: string){
    const h1 = t1.split(':')[0];
    const m1 =
  }

}
