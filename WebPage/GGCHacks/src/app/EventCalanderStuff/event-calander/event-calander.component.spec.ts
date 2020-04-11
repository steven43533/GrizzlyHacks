import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCalanderComponent } from './event-calander.component';

describe('EventCalanderComponent', () => {
  let component: EventCalanderComponent;
  let fixture: ComponentFixture<EventCalanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCalanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
