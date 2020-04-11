import { TestBed } from '@angular/core/testing';

import { CalanderServiceService } from './calander-service.service';

describe('CalanderServiceService', () => {
  let service: CalanderServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalanderServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
