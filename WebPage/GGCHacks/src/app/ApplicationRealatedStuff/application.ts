import {FormBuilder, FormGroup} from '@angular/forms';

export class Application {

  app: FormGroup;

  constructor(fb: FormBuilder) {
    this.app = fb.group({
      question1: [''],
      question2: ['']
    });
  }

  getQuestion1() {
    return this.app.get('question1');
  }

  getQuestion2() {
    return this.app.get('question2');
  }

  setAnswers(app: AppInterface) {
    this.getQuestion1().setValue(app.question1);
    this.getQuestion2().setValue(app.question2);
  }
}

export interface AppInterface {
  question1: string;
  question2: string;
  submitted: boolean;
}
