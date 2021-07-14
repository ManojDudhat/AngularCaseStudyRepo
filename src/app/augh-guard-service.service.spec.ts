import { TestBed } from '@angular/core/testing';

import { AughGuardServiceService } from './augh-guard-service.service';

describe('AughGuardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AughGuardServiceService = TestBed.get(AughGuardServiceService);
    expect(service).toBeTruthy();
  });
});
