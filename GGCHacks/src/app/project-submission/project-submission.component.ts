import { Component } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-projects',
  templateUrl: './project-submission.component.html',
  styleUrls: ['./project-submission.component.css']
})
export class ProjectSubmissionComponent {
  form: FormGroup;

  onSubmit(){
    console.log("submit")
  }
}
