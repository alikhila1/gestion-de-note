import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttribuerAbsenceComponent } from './attribuer-absence.component';

describe('AttribuerAbsenceComponent', () => {
  let component: AttribuerAbsenceComponent;
  let fixture: ComponentFixture<AttribuerAbsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttribuerAbsenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttribuerAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
