import {Component, OnDestroy, OnInit, ɵbypassSanitizationTrustHtml} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../interfaces/user';
import {Observable, of, Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit, OnDestroy {

  users: User[];
  sub: Subscription;
  search: string;
  checkboxes: Checkboxes;
  thing: boolean;





  constructor(private afs: AngularFirestore, public auth: AuthService) {
    this.checkboxes = new Checkboxes();
    this.thing = false;
  }


  ngOnInit(): void {
    this.sub = this.afs.collection<User>(`users`).valueChanges().subscribe( us => {
      this.users = us;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  makeAdmin(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    user.isAdmin = true;
    userRef.update(user);
  }

  takeAdmin(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    user.isAdmin = false;
    userRef.update(user);
  }

  accept(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    user.isRegisteredFor2020 = true;
    userRef.update(user);
  }

  revoke(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    user.isRegisteredFor2020 = false;
    userRef.update(user);
  }

  updateCheckBoxes() {
    console.log('terst');
    if (this.thing) {
      this.thing = false;
    } else {
      this.thing = true;
    }

  }
}

export class Checkboxes {
  isAdminBox: boolean;
  noAdmin: boolean;
  hasApplication: boolean;
  noApplication: boolean;
  acceptedToHack: boolean;
  notAcceptedToHack: boolean;


  constructor() {
    this.isAdminBox = false;
    this. noAdmin = false;
    this.hasApplication = false;
    this.noApplication = false;
    this.acceptedToHack = false;
    this.notAcceptedToHack = false;
  }

  toggleIsAd() {
    if (this.isAdminBox) {
      this.isAdminBox = false;
    } else {
      this.isAdminBox = true;
    }
  }

  toggleIsNoAd() {
    if (this.noAdmin) {
      this.noAdmin = false;
    } else {
      this.noAdmin = true;
    }
  }

  toggleHasApp() {

  }
}

