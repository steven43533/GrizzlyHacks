import {Component, OnDestroy, OnInit} from '@angular/core';
import {Application} from '../application';
import {AuthService} from '../../services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApplicationService} from '../application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit, OnDestroy {

  sub: Subscription;
  form: FormGroup;
  gender = ['male', 'female', 'other'];

  constructor(public auth: AuthService, private afs: AngularFirestore, private fb: FormBuilder, public app: ApplicationService) {
    this.form = fb.group({
      uid: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      ethnicity: ['', [Validators.required]],
      preferredPronouns: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      major: ['', [Validators.required]],
      college: ['', [Validators.required]],
      expectedGraduationDate: ['', [Validators.required]],
      whyAttend: ['', [Validators.required]],
      whatDoYouWantToLearn: ['', [Validators.required]],
      linkedIn: ['', [Validators.required]],
      github: ['', [Validators.required]],
      emergencyContactFirstName: ['', [Validators.required]],
      emergencyContactLastName: ['', [Validators.required]],
      relationshipToEmergencyContact: ['', [Validators.required]],
      emergencyContactPhoneNumber: ['', [Validators.required]],
      emergencyContactEmail: ['', [Validators.required]],
      agreedToCodeOfConduct: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
   this.form.get('uid').setValue(this.auth.user.uid);

  }

  private setFormToEmpty() {
    for (let controlsKey in this.form.controls) {
      this.form.get(controlsKey).setValue('');
    }
  }

  ngOnDestroy(): void {
    this.setFormToEmpty();
  }

}
