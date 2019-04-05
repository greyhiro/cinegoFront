import { TestBed } from '@angular/core/testing';

import { SceanceService } from './sceance.service';

describe('SceanceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SceanceService = TestBed.get(SceanceService);
    expect(service).toBeTruthy();
  });
});
