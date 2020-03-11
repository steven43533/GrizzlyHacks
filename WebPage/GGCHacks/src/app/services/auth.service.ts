import {Injectable, OnDestroy} from '@angular/core';
import { Subscription} from 'rxjs';
import {User} from '../interfaces/user';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {FormGroup} from '@angular/forms';
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {


  user: User;
  sub: Subscription;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    afAuth.authState.subscribe( user => {
      if (user != null) {
        this.setUser(user);
      } else {
        this.user = null;
      }
    });
  }

  async setUser(user) {
    return this.sub = await this.afs.doc<User>(`users/${user.uid}`).valueChanges().subscribe( u => {
      this.user = u;
    });

  }

  // stuff for creating users

  private createUserData(user, form: FormGroup) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      firstName: form.get('firstName').value,
      lastName: form.get('lastName').value,
      isAdmin: false
    };
    return userRef.set(data, {merge: true});
  }

  async createUser(form: FormGroup) {
    await this.afAuth.createUserWithEmailAndPassword(form.get('email').value, form.get('password').value).then( result => {
      alert('Account Created');
      this.createUserData(result.user, form);
    }, error => {
      alert('account creation failed' + error.toString());
      return;
    });
  }

  async loginUser(form: FormGroup) {
    console.log(form.get('email').value + "  " + form.get('password').value);
    await this.afAuth.signInWithEmailAndPassword(form.get('email').value, form.get('password').value).then(result => {
      alert('Login succesfull');
    }, error => {
      alert('something is wrong');
    });
  }

  public sighOut() {
    this.afAuth.signOut().then( result => {
      alert(result);
    }, error => {
      alert(error);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }



  /*







  private testSettingAdmin(user) {
    this.afs.doc((`users/${user.uid}`)).update({admin: true});
  }

   */
}
