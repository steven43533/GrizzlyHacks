import {Injectable, OnDestroy} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Subscription} from 'rxjs';
import { Application } from './application';
import {FormBuilder} from '@angular/forms';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService implements OnDestroy {

  sub: Subscription;
  sub2: Subscription;
  application: Application;
  user: User;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore
  ) {
    this.sub = afAuth.authState.subscribe( user => {
      this.user = user;
      this.setApplication(user);
    });

  }

  async setApplication(user) {
    this.sub2 = this.afs.doc<Application>(`applications/${user.uid}`).valueChanges().subscribe( app => {
      this.application = app;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
