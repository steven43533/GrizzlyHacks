import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeTrackerComponent } from './judge-tracker.component';

describe('JudgeTrackerComponent', () => {
  let component: JudgeTrackerComponent;
  let fixture: ComponentFixture<JudgeTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgeTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JudgeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
