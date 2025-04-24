import { Component } from '@angular/core';
import { JudgeService } from '../services/judge.service';

interface Judge {
  firstName: string;
  lastName: string;
  hackathons: string[];
}
interface Hackathon {
  name: string;
  date: string;
}
@Component({
  selector: 'app-judge-tracker',
  templateUrl: './judge-tracker.component.html',
  styleUrls: ['./judge-tracker.component.css']
})
export class JudgeTrackerComponent {
  judges: Judge[] = [];
  newFirstName: string = '';
  newLastName: string = '';
  newHackathon: string = '';
  hackathonList: string[] = [];

  addHackathon() {
    if (this.newHackathon) {
      this.hackathonList.push(this.newHackathon);
      this.newHackathon = '';
    }
  }
  addJudge() {
  if (this.newFirstName.trim() && this.newLastName.trim() && this.hackathonList.length){
    this.judges.push({
      firstName: this.newFirstName.trim(),
      lastName: this.newLastName.trim(),
      hackathons: [...this.hackathonList]

    });
    this.newFirstName = '';
    this.newLastName = '';
    this.hackathonList = [];
  }
 }
 removeJudge(firstName: string, lastName: string){
  this.judges = this.judges.filter(
    judge => !(judge.firstName === firstName && judge.lastName === lastName)
  );
 }
}


