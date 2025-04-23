import { TestBed } from '@angular/core/testing';
import { CalendarServiceService } from './calendar-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';

const AngularFirestoreStub = {
  collection: () => ({
    valueChanges: () => of([]) // Mock empty events for now
  }),
  doc: () => ({
    set: () => Promise.resolve(),
    update: () => Promise.resolve(),
    delete: () => Promise.resolve()
  }),
  createId: () => 'mockId123'
};

describe('CalendarServiceService', () => {
  let service: CalendarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CalendarServiceService,
        { provide: AngularFirestore, useValue: AngularFirestoreStub }
      ]
    });
    service = TestBed.inject(CalendarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly compare days of the week', () => {
    expect(service.compare('Monday', 'Tuesday')).toBeLessThan(0);
    expect(service.compare('Sunday', 'Friday')).toBeGreaterThan(0);
    expect(service.compare('Wednesday', 'Wednesday')).toBe(0);
  });

  it('should correctly compare times', () => {
    expect(service.timeCompare('09:00AM', '10:00AM')).toBeLessThan(0);
    expect(service.timeCompare('02:00PM', '01:00PM')).toBeGreaterThan(0);
    expect(service.timeCompare('12:00PM', '12:00PM')).toBe(0);
  });

  it('should unsubscribe on destroy', () => {
    spyOn(service.sub, 'unsubscribe');
    service.ngOnDestroy();
    expect(service.sub.unsubscribe).toHaveBeenCalled();
  });

});
