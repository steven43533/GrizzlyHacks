import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-super-admin-dashboard',
  templateUrl: './super-admin-dashboard.component.html',
  styleUrls: ['./super-admin-dashboard.component.css']
})
export class SuperAdminDashboardComponent {
  
  users: User[];
  sub: Subscription;
  search: string;

  constructor(private afs: AngularFirestore, public auth: AuthService) { 

  }

  /**
   * Initializes the component. Pulls all users from the database and stores them in the users array.
   */
  ngOnInit(): void {
    this.sub = this.afs.collection<User>(`users`).valueChanges().subscribe( us => {
      this.users = us;
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
      const userRef = this.afs.doc(`users/${user.uid}`);
      user.isSuperAdmin = true;
      userRef.update(user);
      }
  }
  takeSuperAdmin(user: User) {
    if (user === this.auth.user) {
      alert('You cannot take your own super admin status.');
      return;
    }
    if (confirm(`Are you sure you want to take ${user.firstName} ${user.lastName}'s super admin status?`)) {
      const userRef = this.afs.doc(`users/${user.uid}`);
      user.isSuperAdmin = false;
      userRef.update(user);
    }
  }
  makeAdmin(user: User) {
    if (confirm(`Are you sure you want to make ${user.firstName} ${user.lastName} an admin?`)) {
      const userRef = this.afs.doc(`users/${user.uid}`);
      user.isAdmin = true;
      userRef.update(user);
    }
  }

  takeAdmin(user: User) {
    if (confirm(`Are you sure you want to take ${user.firstName} ${user.lastName}'s admin status?`)) {  
      const userRef = this.afs.doc(`users/${user.uid}`);
      user.isAdmin = false;
      userRef.update(user);
    }
  }

  filterRole(role: string) {
    this.sub = this.afs.collection<User>(`users`, ref => ref.where(role, '==', true)).valueChanges().subscribe( us => {
      this.users = us;
    });
  }
}

