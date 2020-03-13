import {Injectable, OnDestroy} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {Subscription} from 'rxjs';
import {AppInterface, Application} from './application';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService implements OnDestroy{

  application: Application;
  noApplication: boolean;
  sub: Subscription;
  sub2: Subscription;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private fb: FormBuilder
  ) {
    this.noApplication  = true;
    this.application = new Application(fb);
    this.sub = afAuth.authState.subscribe( user => {
      this.setApplication(user);
    });
  }

  async setApplication(user) {
    this.sub2 = await this.afs.doc<AppInterface>(`applications/${user.uid}`).valueChanges().subscribe(app => {
      if ( app ) {
        this.application.setAnswers(app);
        this.noApplication = false;
      } else {
        this.noApplication = true;
        this.application = new Application(this.fb);
      }
    } );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
