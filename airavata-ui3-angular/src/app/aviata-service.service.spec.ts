import { TestBed } from '@angular/core/testing';

import { AviataServiceService } from './aviata-service.service';

describe('AviataServiceService', () => {
  let service: AviataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AviataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
