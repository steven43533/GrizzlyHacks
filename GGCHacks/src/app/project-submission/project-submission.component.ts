import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


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
      'description': new FormControl(null),
      'members': new FormControl(null),
      'repos': new FormControl(null),
      'logo': new FormControl(null),
    });
  }

}
