import { TestBed } from '@angular/core/testing';

import { GestionEtudiantEtrangerService } from './gestion-etudiant-etranger.service';

describe('GestionEtudiantEtrangerService', () => {
  let service: GestionEtudiantEtrangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionEtudiantEtrangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
