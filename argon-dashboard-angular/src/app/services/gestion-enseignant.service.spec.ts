import { TestBed } from '@angular/core/testing';

import { GestionEnseignantService } from './gestion-enseignant.service';

describe('GestionEnseignantService', () => {
  let service: GestionEnseignantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionEnseignantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
