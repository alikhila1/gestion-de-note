import { TestBed } from '@angular/core/testing';

import { GestionResultatsService } from './gestion-resultats.service';

describe('GestionResultatsService', () => {
  let service: GestionResultatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionResultatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
