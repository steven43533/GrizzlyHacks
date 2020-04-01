import {Component, OnDestroy, OnInit, ɵbypassSanitizationTrustHtml} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../interfaces/user';
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit, OnDestroy {

  users: User[];
  sub: Subscription;
  aditingUsers: boolean;

  constructor(private afs: AngularFirestore, public auth: AuthService) {}


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
}
