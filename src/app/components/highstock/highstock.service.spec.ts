import { TestBed } from '@angular/core/testing';

import { HighstockService } from './highstock.service';

describe('HighstockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighstockService = TestBed.get(HighstockService);
    expect(service).toBeTruthy();
  });
});
