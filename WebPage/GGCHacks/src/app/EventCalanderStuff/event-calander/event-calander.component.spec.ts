import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from '../../../environments/environment';
import { EventCalanderComponent } from './event-calander.component';
import { CalanderServiceService } from '../calander-service.service';
import { AuthService } from '../../services/auth.service';

describe('EventCalanderComponent', () => {
  let component: EventCalanderComponent;
  let fixture: ComponentFixture<EventCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventCalanderComponent],
      imports: [AngularFireModule.initializeApp(environment.firebase)],
      providers: [CalanderServiceService, AuthService, AngularFirestore],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
