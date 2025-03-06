import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../services/timeline.service';
import { Observable } from 'rxjs';
import { TimelineEvent } from '../services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  providers: [TimelineService]
})
export class TimelineComponent implements OnInit {
  events$: Observable<TimelineEvent[] | null>;
  constructor(public timelineService: TimelineService) {}

  ngOnInit(): void {
    this.events$ = this.timelineService.events$;
  }


}
