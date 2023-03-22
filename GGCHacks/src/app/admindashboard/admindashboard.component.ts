import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { User} from '../interfaces/user';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

/**
 * This is the admin dashboard component.
 * @remarks
 * This component is responsible for displaying the admin dashboard.
 */
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

    /**
   * Creates an instance of `AdmindashboardComponent`.
   * @param afs - The AngularFirestore object with a private visibility.
   * @param auth - The AuthService object with a public visibility.
   */
  constructor(private afs: AngularFirestore, public auth: AuthService) {
    this.checkboxes = new Checkboxes();
    this.thing = false;
  }

  /**
   * Initializes the component.
   */
  ngOnInit(): void {
    this.sub = this.afs.collection<User>(`users`).valueChanges().subscribe( us => {
      this.users = us;
    });
  }

  /**
   * Destroys the component.
   */
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  /**
   * Makes the user an admin.
   * @param user - The user object.
   */
  makeAdmin(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    user.isAdmin = true;
    userRef.update(user);
  }

  /**
   * Takes away the user's admin status.
   * @param user - The user object.
   */
  takeAdmin(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    user.isAdmin = false;
    userRef.update(user);
  }

  /**
   * Accepts the user's application to the hackathon.
   * @param user - The user object.
   */
  accept(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    user.isRegisteredFor2020 = true;
    userRef.update(user);
  }

  /**
   * Revokes the user's application to the hackathon.
   * @param user - The user object.
   */
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


  toggleIsAd() {
    if (this.checkboxes.isAdminBox) {
      this.checkboxes.isAdminBox = false;
    } else {
      this.checkboxes.isAdminBox = true;
    }
    this.updateCheckBoxes();
  }

  toggleIsNoAd() {
    if (this.checkboxes.noAdmin) {
      this.checkboxes.noAdmin = false;
    } else {
      this.checkboxes.noAdmin = true;
    }
    this.updateCheckBoxes();
  }

  toggleHasApp() {
    if (this.checkboxes.hasApplication) {
      this.checkboxes.hasApplication = false;
    } else {
      this.checkboxes.hasApplication = true;
    }
    this.updateCheckBoxes();
  }

  toggleNoHasApp() {
    if (this.checkboxes.noApplication) {
      this.checkboxes.noApplication = false;
    } else {
      this.checkboxes.noApplication = true;
    }
    this.updateCheckBoxes();
  }

  toggleAccepted() {
    if (this.checkboxes.acceptedToHack) {
      this.checkboxes.acceptedToHack = false;
    } else {
      this.checkboxes.acceptedToHack = true;
    }
    this.updateCheckBoxes();
  }


  toggleNotAccepted() {
    if (this.checkboxes.notAcceptedToHack) {
      this.checkboxes.notAcceptedToHack = false;
    } else {
      this.checkboxes.notAcceptedToHack = true;
    }
    this.updateCheckBoxes();
  }

}

/**
 * The Checkboxes class.
 */
export class Checkboxes {
  isAdminBox: boolean;
  noAdmin: boolean;
  hasApplication: boolean;
  noApplication: boolean;
  acceptedToHack: boolean;
  notAcceptedToHack: boolean;

  /**
   * Creates an instance of `Checkboxes`.
   */
  constructor() {
    this.isAdminBox = false;
    this. noAdmin = false;
    this.hasApplication = false;
    this.noApplication = false;
    this.acceptedToHack = false;
    this.notAcceptedToHack = false;
  }
}