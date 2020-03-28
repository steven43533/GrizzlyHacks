import {Component, OnDestroy, OnInit} from '@angular/core';
import {Application} from '../interfaces/application';
import {AuthService} from '../services/auth.service';
import {AngularFirestore} from '@angular/fire/firestore';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit, OnDestroy {

  form: FormGroup;
  gender = ['male', 'female', 'other'];

  constructor(public auth: AuthService, private afs: AngularFirestore, private fb: FormBuilder) {
    this.form = fb.group({
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
      agreedToCodeOfConduct: [false, [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.auth.user.application !== null) {
      this.setForm();
    } else {
      this.emptyForm();
    }
  }

  setForm(): void {
    const app = this.auth.user.application;
    this.form = this.fb.group({
      gender: [app.gender, [Validators.required]],
      ethnicity: [app.ethnicity, [Validators.required]],
      preferredPronouns: [app.preferredPronouns, [Validators.required]],
      phoneNumber: [app.phone, [Validators.required]],
      major: [app.major, [Validators.required]],
      college: [app.college, [Validators.required]],
      expectedGraduationDate: [app.expectedGraduationDate, [Validators.required]],
      whyAttend: [app.whyAttend, [Validators.required]],
      whatDoYouWantToLearn: [app.whatDoYouWantToLearn, [Validators.required]],
      linkedIn: [app.linkedIn, [Validators.required]],
      github: [app.gitHub, [Validators.required]],
      emergencyContactFirstName: [app.emCFN, [Validators.required]],
      emergencyContactLastName: [app.emCLN, [Validators.required]],
      relationshipToEmergencyContact: [app.relationshipToEC, [Validators.required]],
      emergencyContactPhoneNumber: [app.emCPhoneNumber, [Validators.required]],
      emergencyContactEmail: [app.emCEmail, [Validators.required]],
      agreedToCodeOfConduct: [app.agreedToCodeOfConduct, [Validators.required]]
    });
  }

  emptyForm(): void {
    this.form = this.fb.group({
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
      agreedToCodeOfConduct: [false, [Validators.required]]
    });
  }

  ngOnDestroy(): void {

  }

}
