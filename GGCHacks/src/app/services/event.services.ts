import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Timestamp } from "@angular/fire/firestore";
import { Observable, Subject} from "rxjs";
import { map, startWith } from "rxjs/operators";
import {Event} from "../EventCalendarStuff/event";

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private  eventsSubject = new Subject<Event[]>();
  events$: Observable<Event[]> = this.eventsSubject.asObservable().pipe(startWith([]));

  constructor() {
    firebase.firestore().collection('events').orderBy('id', 'desc').get().then(snapshot => {
      const initialEvents = snapshot.docs.map(doc => ({

        id: doc.id,
        title: doc.data().title,
        startTime: doc.data().startTime,
        endTime: doc.data().endTime,
        day: doc.data().day,
      } as Event));
      this.eventsSubject.next(initialEvents);
    }).catch(error => {
      console.error('Error fetching events', error);
    });

    //Set up real-time listener
    firebase.firestore().collection('events').orderBy('id', 'desc').onSnapshot(snapshot => {
      const events = snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title,
        startTime: doc.data().startTime,
        endTime: doc.data().endTime,
        day: doc.data().day,
      }as Event));
      this.eventsSubject.next(events);
    }, error => {
      console.error('Error listening to events:', error);
    });
  }

  //Adds event in Firebase
  addEvent(eventTitle: string, eventStartTime: string, eventEndTime: string, eventDay: string): void {
    // check if there is a 'count' document in the events collection
    let count = 0;
    firebase.firestore().collection('events').doc('count').get().then(doc => {
      if (doc.exists){
        count = doc.data().count;
        firebase.firestore().collection('events').doc('count').update({count: count +1 });
      } else {
        //If no count doc exists, create one and set count to 1
        firebase.firestore().collection('events').doc('count').set({count: 1});
      }
      //Create a new event object and add it to the events collection
      const newEvent = {
        id: count.toString(),
        title: eventTitle,
        startTime: eventStartTime,
        endTime: eventEndTime,
        day: eventDay
      };

      //add event to Firestore
      firebase.firestore().collection('events').doc(newEvent.id).set(newEvent);
    }).catch(error => {
      console.error("Error adding: ", error);
    })
  }

  // Edits an event in Firebase
  editEvent(updatedEvent: Event): void {
    const eventRef = firebase.firestore().collection('events').doc(updatedEvent.id);
    eventRef.update(updatedEvent)
      .catch(error => console.log('Error updating event:', error));
  }

  // Deletes an event from Firebase and removes it from the user's events array
  deleteEvent(event: Event): void {
    // Delete the event document
    firebase.firestore().collection('events').doc(event.id).delete()
      .catch(error => {
        console.log("Error deleting event: ", error);
      });
  }

  getEvents(): Observable<Event[]> {
    return this.events$;
  }
}


