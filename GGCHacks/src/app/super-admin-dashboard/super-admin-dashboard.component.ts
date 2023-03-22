import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { Subscription } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent {
  
  users: User[];
  sub: Subscription;
  search: string;
  currentFilter: string = 'All';

  constructor(private afs: AngularFirestore, public auth: AuthService) { 

  }

  /**
   * Initializes the component. Pulls all users from the database and stores them in the users array.
   */
  ngOnInit(): void {
    this.sub = this.afs.collection<User>(`users`).valueChanges().subscribe( us => {
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

  makeSuperAdmin(user: User) {
    if (confirm(`Are you sure you want to make ${user.firstName} ${user.lastName} a super admin?`)) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      user.isSuperAdmin = true;
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
      user.isSuperAdmin = false;
      userRef.update(user);
    }
  }

  makeAdmin(user: User) {
    if (confirm(`Are you sure you want to make ${user.firstName} ${user.lastName} an admin?`)) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      user.isAdmin = true;
      userRef.update(user);
    }
  }

  takeAdmin(user: User) {
    if (confirm(`Are you sure you want to take ${user.firstName} ${user.lastName}'s admin status?`)) {  
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      user.isAdmin = false;
      userRef.update(user);
    }
  }

  filterUsers(filter: string) {
    if (filter === 'All') {
      this.currentFilter = 'All';
      this.sub = this.afs.collection<User>(`users`).valueChanges().subscribe( us => {
        this.users = us;
        this.users.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
      });
    }
    if (filter === 'Admin') {
      this.currentFilter = 'Admin';
      this.sub = this.afs.collection<User>(`users`, ref => ref.where('isAdmin', '==', true)).valueChanges().subscribe( us => {
        this.users = us;
      });
    }
    if (filter === 'Super Admin') {
      this.currentFilter = 'Super Admin';
      this.sub = this.afs.collection<User>(`users`, ref => ref.where('isSuperAdmin', '==', true)).valueChanges().subscribe( us => {
        this.users = us;
      });
    }
  }
}
