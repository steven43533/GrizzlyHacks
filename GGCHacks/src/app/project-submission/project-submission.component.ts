import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";


@Component({
  selector: 'app-projects',
  templateUrl: './project-submission.component.html',
  styleUrls: ['./project-submission.component.css']
})
export class ProjectSubmissionComponent implements OnInit{
  hackathons = ['Hackathon 1', 'Hackathon 2', 'Hackathon 3', 'Hackathon 4', 'Hackathon 5'];
  projectSubmission: FormGroup;

  ngOnInit() {
    this.projectSubmission = new FormGroup({
      'description': new FormControl(null, Validators.required),
      'members': new FormControl(null,Validators.required),
      'repo': new FormControl(null,Validators.required),
      'logo': new FormControl(null),
    });
  }

  onSubmit(){
    console.log(this.projectSubmission);
  }

}
