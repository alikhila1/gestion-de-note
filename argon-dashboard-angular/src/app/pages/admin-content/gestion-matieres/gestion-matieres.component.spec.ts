import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMatieresComponent } from './gestion-matieres.component';

describe('GestionMatieresComponent', () => {
  let component: GestionMatieresComponent;
  let fixture: ComponentFixture<GestionMatieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMatieresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMatieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
