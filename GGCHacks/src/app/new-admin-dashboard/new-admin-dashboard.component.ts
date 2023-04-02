import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-new-admin-dashboard',
  templateUrl: './new-admin-dashboard.component.html',
  styleUrls: ['./new-admin-dashboard.component.css']
})
export class NewAdminDashboardComponent {
  
  users: User[];
  fullUserArray: User[];
  sub: Subscription;
  search: string;
  adminFilter: string = 'All Members';
  applicationFilter: string = 'No Filter';
  acceptedFilter: string = 'No Filter';

  constructor(private afs: AngularFirestore, public auth: AuthService) { 

  }

  /**
   * Initializes the component. Pulls all users from the database and stores them in the users array.
   */
  ngOnInit(): void {
    this.sub = this.afs.collection<User>(`users`).valueChanges().subscribe( us => {
      this.fullUserArray = us;
      this.users = us;
      this.users.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
    });
  }

  /**
   * Destroys the component and unsubscribes from the database. 
   */
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  makeAdmin(user: User) {
    if (confirm(`Are you sure you want to make ${user.firstName} ${user.lastName} an admin?`)) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      user.adminLevel = 1;
      userRef.update(user);
    }
  }

  takeAdmin(user: User) {
    if (confirm(`Are you sure you want to take ${user.firstName} ${user.lastName}'s admin status?`)) {  
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      user.adminLevel = 0;
      userRef.update(user);
    }
  }

  makeSuperAdmin(user: User) {
    if (confirm(`Are you sure you want to make ${user.firstName} ${user.lastName} a super admin?`)) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      user.adminLevel = 2;
      userRef.update(user);
      }
  }

  takeSuperAdmin(user: User) {
    if (user.email === this.auth.user.email) {
      alert('You cannot take your own super admin status.');
      return;
    }
    if (confirm(`Are you sure you want to take ${user.firstName} ${user.lastName}'s super admin status?`)) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      user.adminLevel = 1;
      userRef.update(user);
    }
  }

  acceptApplication(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    user.isRegisteredFor2020 = true;
    userRef.update(user);
  }

  revokeApplication(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    user.isRegisteredFor2020 = false;
    userRef.update(user);
  }

  changeAdminFilter(filter: string) {
    if (filter === 'All Members') {
      this.adminFilter = 'All Members';
    }
    if (filter === 'Non-Admins') {
      this.adminFilter = 'Non-Admins';
    }
    if (filter === 'Admins') {
      this.adminFilter = 'Admins';
    }
    if (filter === 'Super Admins') {
      this.adminFilter = 'Super Admins';
    }
    this.filterUserEntries();
  }

  changeApplicationFilter(filter: string) {
    if (filter === 'No Filter') {
      this.applicationFilter = 'No Filter';
    }
    if (filter === 'Submitted Application') {
      this.applicationFilter = 'Submitted Application';
    }
    if (filter === 'Application Not Submitted') {
      this.applicationFilter = 'Application Not Submitted';
    }
    if (filter === 'Application Created') {
      this.applicationFilter = 'Application Created';
    }
    if (filter === 'No Application Created') {
      this.applicationFilter = 'No Application Created';
    }
    this.filterUserEntries();
  }

  changeAcceptedFilter(filter: string) {
    if (filter === 'No Filter') {
      this.acceptedFilter = 'No Filter';
    }
    if (filter === 'Accepted') {
      this.acceptedFilter = 'Accepted';
    }
    if (filter === 'Not Accepted') {
      this.acceptedFilter = 'Not Accepted';
    }
    this.filterUserEntries();
  }

  filterUserEntries() {
    //Show the selected Admin Filter.
    switch(this.adminFilter) {
      case 'All Members': {
        this.users = this.fullUserArray;
        break;
      }
      case 'Non-Admins': {
        this.users = this.fullUserArray.filter( u => u.adminLevel == 0);
        break;
      }
      case 'Admins': {
        this.users = this.fullUserArray.filter( u => u.adminLevel == 1);
        break;
      }
      case 'Super Admins': {
        this.users = this.fullUserArray.filter( u => u.adminLevel == 2);
        break;
      }
    }
    
    //Show the selected Application Filter.
    switch(this.applicationFilter) {
      case 'Submitted Application': {
        this.users = this.users.filter( u => u.application != null && u.application.submitted );
        break;
      }
      case 'Application Not Submitted': {
        this.users = this.users.filter( u => u.application == null || !u.application.submitted );
        break;
      }
      case 'Application Created': {
        this.users = this.users.filter( u => u.application != null );
        break;
      }
      case 'No Application Created': {
        this.users = this.users.filter( u => u.application == null );
        break;
      }
    }

    //Show the selected Accepted Filter.
    switch(this.acceptedFilter) {
      case 'Accepted': {
        this.users = this.users.filter( u => u.isRegisteredFor2020 == true );
        break;
      }
      case 'Not Accepted': {
        this.users = this.users.filter( u => u.isRegisteredFor2020 == false );
        break;
      }
    }

  }
}
