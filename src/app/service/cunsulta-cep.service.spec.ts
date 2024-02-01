import { TestBed } from '@angular/core/testing';

import { CunsultaCepService } from './cunsulta-cep.service';

describe('CunsultaCepService', () => {
  let service: CunsultaCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CunsultaCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
