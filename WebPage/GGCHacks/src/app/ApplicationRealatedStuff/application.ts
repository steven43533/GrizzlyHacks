import {FormBuilder, FormGroup} from '@angular/forms';

export class Application {

  app: FormGroup;

  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public gender: string,
    public ethnicity: string,
    public preferredPronouns: string,
    public dietaryRestrictions: string,
    public phone: string,
    public major: string,
    public college: string,
    public expectedGraduationDate: number,
    public whyAttend: string,
    public whatDoYouWantToLearn: string,
    public linkedIn: string,
    public gitHub: string,
    public emCFN: string,
    public emCLN: string,
    public relationshipToEC: string,
    public emCPhoneNumber: string,
    public emCEmail: string,
    public agreedToCodeOfConduct: boolean
  ) {
  }
}
