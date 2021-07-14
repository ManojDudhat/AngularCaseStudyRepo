import { TestBed } from '@angular/core/testing';

import { HttpCustomInterceptorService } from './http-custom-interceptor.service';

describe('HttpCustomInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpCustomInterceptorService = TestBed.get(HttpCustomInterceptorService);
    expect(service).toBeTruthy();
  });
});
