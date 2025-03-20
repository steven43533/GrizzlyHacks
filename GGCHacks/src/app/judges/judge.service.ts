import { Injectable } from '@angular/core';
import { Judge } from './judges';

@Injectable({
  providedIn: 'root'
})
export class JudgeService {
  private judges: Judge[] = [
    { id: 1, name: 'Judge 1', event: 'Hackathon 2025' },
    { id: 2, name: 'Judge 2 ',event:'Hackathon 2025'},
    { id: 3, name: 'Judge 2',event:'Hackathon 2025'} 
  ];

  getJudges(): Judge[] {
    return this.judges;
  }

  getJudgesByEvent(event: string): Judge[] {
    return this.judges.filter(judge => judge.event === event);
  }
}