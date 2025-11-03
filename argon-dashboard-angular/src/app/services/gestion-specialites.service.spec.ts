import { TestBed } from '@angular/core/testing';

import { GestionSpecialitesService } from './gestion-specialites.service';

describe('GestionSpecialitesService', () => {
  let service: GestionSpecialitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionSpecialitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
