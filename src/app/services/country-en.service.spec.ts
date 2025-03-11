import { TestBed } from '@angular/core/testing';

import { CountryENService } from './country-en.service';

describe('CountryENService', () => {
  let service: CountryENService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryENService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
