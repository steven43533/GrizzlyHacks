import {Injectable, OnDestroy} from '@angular/core';
import { Subscription} from 'rxjs';
import {User} from '../interfaces/user';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';




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

  async loginUser(em: string, pw: string) {
    await this.afAuth.signInWithEmailAndPassword(em, pw).then( result => {
      alert('Login succesfull');
      this.attachUser(result.user);
    }, error => {
      alert( ' your account has been deleted make a new one');
      this.router.navigate(['/newUser']);
    });
  }

  async attachUser(user) {
    this.setUser(user).then(() => console.log(this.user));
  }


  async setUser(user) {
    return this.sub = await this.afs.doc<User>(`users/${user.uid}`).valueChanges().subscribe( u => {
      this.user = u;
    });

  }

  private updateUserData(user, fN: string, lN: string) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      firstName: fN,
      lastName: lN,
      isAdmin: false

    };
    return userRef.set(data, {merge: true});
  }


  public updateUser() {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${this.user.uid}`);
    userRef.update(this.user);
  }


  async createUser(em: string, pw: string, fN: string, lN: string) {
    await this.afAuth.createUserWithEmailAndPassword(em, pw).then( result => {
      alert('Account Created');
      this.router.navigate(['/userDashBoard']);
      this.updateUserData(result.user, fN, lN);
      this.attachUser(result.user);
    }, error => {
      alert('account creation failed' + error.toString());
      return;
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

  private testSettingAdmin(user) {
    this.afs.doc((`users/${user.uid}`)).update({admin: true});
  }
}
