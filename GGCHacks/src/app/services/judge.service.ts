import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JudgeService {
  private judges: string[] = [];


  constructor() { }
  getJudges(): string[] {
    return this.judges;
  }
  addJudge(name: string): void {
    if(name && !this.judges.includes(name)) {
      this.judges.push(name);
    }
  }
removeJudge(name: string): void {
  this.judges = this.judges.filter(judge => judge !== name);


  }
}

  

