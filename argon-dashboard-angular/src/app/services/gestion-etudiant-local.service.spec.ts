import { TestBed } from '@angular/core/testing';

import { GestionEtudiantLocalService } from './gestion-etudiant-local.service';

describe('GestionEtudiantLocalService', () => {
  let service: GestionEtudiantLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionEtudiantLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
