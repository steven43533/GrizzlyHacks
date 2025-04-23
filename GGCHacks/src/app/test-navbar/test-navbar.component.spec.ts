import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestNavbarComponent } from './test-navbar.component';

describe('TestNavbarComponent', () => {
  let component: TestNavbarComponent;
  let fixture: ComponentFixture<TestNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
