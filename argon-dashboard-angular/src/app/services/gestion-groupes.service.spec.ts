import { TestBed } from '@angular/core/testing';

import { GestionGroupesService } from './gestion-groupes.service';

describe('GestionGroupesService', () => {
  let service: GestionGroupesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionGroupesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
