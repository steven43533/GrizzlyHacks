import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { TimelineService } from '../services/timeline.service';
import { Observable } from 'rxjs';
import { TimelineEvent } from '../services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TimelineService]
})
export class TimelineComponent implements OnInit {
  events$: Observable<TimelineEvent[]>;
  constructor(public timelineService: TimelineService, private cdr: ChangeDetectorRef) {}
  

  ngOnInit(): void {
    this.events$ = this.getEvents();
    
    this.events$.subscribe(() => {
      this.cdr.markForCheck();
    });
   

  }
  

  refreshPage(): void {
    this.timelineService.getEvents();
  }

  getEvents(): Observable<TimelineEvent[]> {
    return this.timelineService.getEvents();
  }


}
