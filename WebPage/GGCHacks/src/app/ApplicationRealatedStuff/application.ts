import {FormBuilder, FormGroup} from '@angular/forms';

export interface Application {
     firstName: string;
     lastName: string;
     email: string;
     gender: string;
     ethnicity: string;
     preferredPronouns: string;
     dietaryRestrictions: string;
     phone: string;
     major: string;
     college: string;
     expectedGraduationDate: string;
     whyAttend: string;
     whatDoYouWantToLearn: string;
     linkedIn: string;
     gitHub: string;
     emCFN: string;
     emCLN: string;
     relationshipToEC: string;
     emCPhoneNumber: string;
     emCEmail: string;
     agreedToCodeOfConduct: boolean;
}
