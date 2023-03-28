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
  applicationFilter: string = 'All';
  acceptedFilter: string = 'All';

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

  changeAdminFilter(filter: string) {
    if (filter === 'All Members') {
      this.adminFilter = 'All Members';
    }
    if (filter === 'Non-Admin') {
      this.adminFilter = 'Non-Admin';
    }
    if (filter === 'Admin') {
      this.adminFilter = 'Admin';
    }
    if (filter === 'Super Admin') {
      this.adminFilter = 'Super Admin';
    }
    this.filterUserEntries();
  }

  changeApplicationFilter(filter: string) {
    if (filter === 'All') {
      this.applicationFilter = 'All';
    }
    if (filter === 'Has Application') {
      this.applicationFilter = 'Has Application';
    }
    if (filter === 'Missing Application') {
      this.applicationFilter = 'Missing Application';
    }
    this.filterUserEntries();
  }

  changeAcceptedFilter(filter: string) {
    if (filter === 'All') {
      this.acceptedFilter = 'All';
    }
    if (filter === 'Accepted to Hackathon') {
      this.acceptedFilter = 'Accepted to Hackathon';
    }
    if (filter === 'Not Accepted to Hackathon') {
      this.acceptedFilter = 'Not Accepted to Hackathon';
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
      case 'Non-Admin': {
        this.users = this.fullUserArray.filter( u => u.adminLevel == 0);
        break;
      }
      case 'Admin': {
        this.users = this.fullUserArray.filter( u => u.adminLevel == 1);
        break;
      }
      case 'Super Admin': {
        this.users = this.fullUserArray.filter( u => u.adminLevel == 2);
        break;
      }
    }
    
    //Show the selected Application Filter.
    switch(this.applicationFilter) {
      case 'Has Application': {
        this.users = this.users.filter( u => u.application != null );
        break;
      }
      case 'Missing Application': {
        this.users = this.users.filter( u => u.application == null );
        break;
      }
    }

    //Show the selected Accepted Filter.
    switch(this.acceptedFilter) {
      case 'Accepted to Hackathon': {
        this.users = this.users.filter( u => u.isRegisteredFor2020 == true );
        break;
      }
      case 'Not Accepted to Hackathon': {
        this.users = this.users.filter( u => u.isRegisteredFor2020 == false );
        break;
      }
    }

  }
}
