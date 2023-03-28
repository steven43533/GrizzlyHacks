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
  currentFilter: string = 'Non-Admin';
  checkboxHasApplication: boolean;
  checkboxAcceptedToHackathon: boolean;

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

  filterUsers(filter: string) {
    if (filter === 'Non-Admin') {
      this.currentFilter = 'Non-Admin';
      this.users = this.fullUserArray;
    }
    if (filter === 'Admin') {
      this.currentFilter = 'Admin';
      this.users = this.fullUserArray.filter( u => u.isAdmin);
    }
    if (filter === 'Super Admin') {
      this.currentFilter = 'Super Admin';
      this.users = this.fullUserArray.filter( u => u.isSuperAdmin);
    }
  }

  toggleHasApplicationCheckbox() {
    if (this.checkboxHasApplication) {
      this.checkboxHasApplication = false;
    } else {
      this.checkboxHasApplication = true;
    }
  }

  toggleAcceptedToHackathon() {
    if (this.checkboxAcceptedToHackathon) {
      this.checkboxAcceptedToHackathon = false;
    } else {
      this.checkboxAcceptedToHackathon = true;
    }
  }
}
