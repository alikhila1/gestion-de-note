import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEnseignantsComponent } from './gestion-enseignants.component';

describe('GestionEnseignantsComponent', () => {
  let component: GestionEnseignantsComponent;
  let fixture: ComponentFixture<GestionEnseignantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionEnseignantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionEnseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
