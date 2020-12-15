import { TestBed } from '@angular/core/testing';

import { CategoriaSocioService } from './categoria-socio.service';

describe('CategoriaSocioService', () => {
  let service: CategoriaSocioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaSocioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
