import {Injectable, OnDestroy} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Subscription} from 'rxjs';
import { Application} from './application';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService implements OnDestroy {

  application: Application;
  noApplication: boolean;
  sub: Subscription;
  sub2: Subscription;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore
  ) {
    this.noApplication  = true;
    this.sub = afAuth.authState.subscribe( user => {
      this.setApplication(user);
    });
  }

  async setApplication(user) {

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
