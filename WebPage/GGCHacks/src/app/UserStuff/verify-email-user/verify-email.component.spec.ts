import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyEmailUserComponent } from './verify-email-user.component';

describe('VerifyEmailUserComponent', () => {
  let component: VerifyEmailUserComponent;
  let fixture: ComponentFixture<VerifyEmailUserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyEmailUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyEmailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
