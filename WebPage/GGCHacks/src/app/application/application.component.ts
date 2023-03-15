import {Component, OnDestroy, OnInit} from '@angular/core';
import {Application} from '../interfaces/application';
import {AuthService} from '../services/auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Observable, of, Subscription} from 'rxjs';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ApplicationServiceService} from '../services/application-service.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit, OnDestroy {

  form: FormGroup;
  gender = ['Male', 'Female', 'Non-binary', 'Prefer Not To Say', 'other'];
  ethnicity = ['American Indian or Alaska Native', 'Asian', 'Black or African American', 'Hispanic or Latino',
              'Native Hawaiian or Other Pacific Islander', 'White', 'Prefer Not To Say'];
  preferedPronouns = ['He/His', 'She/Her', 'They/Them', 'Prefer Not To Say'];
  graduationDates = ['2020', '2021', '2022', '2023', '2024'];
  dietaryRestrictions = ['No Restrictions', 'Vegan', 'Vegetarian', 'Halal', 'Other...'];
  majors = ['Biology', 'Business administration', 'Chemistry', 'Cinema and media arts production', 'Criminal justice/criminology'
            , 'Elementary education', 'English', 'Environmental science', 'Exercise science', 'History',
            'Human development and aging services', 'Information technology', 'Mathematics', 'Middle grades education', 'Nursing',
            'Political science', 'Psychology', 'Special education'];

  constructor(public auth: AuthService, private fb: FormBuilder, public appService: ApplicationServiceService) {
    console.log('app service ' + appService.app);
    this.form = fb.group({
      gender: [ {value: this.appService.app.gender, disabled: appService.app.submited}, [Validators.required,
                  Validators.minLength(4), Validators.maxLength(17)]],
      ethnicity: [ {value: this.appService.app.ethnicity, disabled: appService.app.submited}, [Validators.required]],
      preferredPronouns: [ {value: this.appService.app.preferredPronouns, disabled: appService.app.submited}, [Validators.required]],
      phoneNumber: [ {value: this.appService.app.phone, disabled: appService.app.submited}, [Validators.required,
        Validators.minLength(10), Validators.maxLength(10)]],
      major: [ {value: this.appService.app.major, disabled: appService.app.submited}, [Validators.required]],
      college: [ {value: this.appService.app.college, disabled: appService.app.submited}, [Validators.required]],
      expectedGraduationDate: [ {value: this.appService.app.expectedGraduationDate, disabled: appService.app.submited},
                                [Validators.required]],
      whyAttend: [ {value: this.appService.app.whyAttend, disabled: appService.app.submited},
        [Validators.required, Validators.maxLength(200)]],
      whatDoYouWantToLearn: [ {value: this.appService.app.whatDoYouWantToLearn, disabled: appService.app.submited},
        [Validators.required, Validators.maxLength(200)]],
      linkedIn: [ {value: this.appService.app.linkedIn, disabled: appService.app.submited}, [Validators.maxLength(70)]],
      github: [ {value: this.appService.app.gitHub, disabled: appService.app.submited}, [ Validators.maxLength(70)]],
      emergencyContactFirstName: [ {value: this.appService.app.emergencyContactFirstName, disabled: appService.app.submited},
                                    [Validators.required, Validators.maxLength(25)]],
      emergencyContactLastName: [ {value: this.appService.app.emergencyContactLastName, disabled: appService.app.submited},
                                  [Validators.required, Validators.maxLength(25)]],
      emergencyContactRelationWithApplicant: [ {value: this.appService.app.emergencyContactRelationWithApplicant,
                                                disabled: appService.app.submited}, [Validators.required, Validators.maxLength(25)]],
      emergencyContactPhoneNumber: [ {value: this.appService.app.emCPhoneNumber, disabled: appService.app.submited}, [Validators.required,
                                      Validators.minLength(10), Validators.maxLength(10)]],
      agreedToCodeOfConduct: [ {value: this.appService.app.agreedToCodeOfConduct, disabled: appService.app.submited}, [Validators.required]]
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }
}
