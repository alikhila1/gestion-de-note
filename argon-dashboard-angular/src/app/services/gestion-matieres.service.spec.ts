import { TestBed } from '@angular/core/testing';

import { GestionMatieresService } from './gestion-matieres.service';

describe('GestionMatieresService', () => {
  let service: GestionMatieresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionMatieresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
