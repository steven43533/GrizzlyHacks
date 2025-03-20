import { Component, OnInit } from '@angular/core';
import { JudgeService } from '../judges/judge.service';
import { Judge } from '../judges/judges';

@Component({
  selector: 'app-judge-tracker',
  templateUrl: './judge-tracker.component.html',
  styleUrls: ['./judge-tracker.component.css']
})
export class JudgeTrackerComponent implements OnInit {
  judges: Judge[] = [];
  selectedEvent: string = 'Hackathon 2025'; // Default event
  events: string[] = ['Hackathon 2025', 'CodeFest 2025']; // Example events

  constructor(private readonly judgeService: JudgeService) {}

  ngOnInit(): void {
    this.loadJudges();
  }

  loadJudges(): void {
    this.judges = this.judgeService.getJudgesByEvent(this.selectedEvent);
  }

  onEventChange(event: string): void {
    this.selectedEvent = event;
    this.loadJudges();
  }
}