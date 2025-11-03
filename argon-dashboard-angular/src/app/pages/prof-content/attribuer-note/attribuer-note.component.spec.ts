import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttribuerNoteComponent } from './attribuer-note.component';

describe('AttribuerNoteComponent', () => {
  let component: AttribuerNoteComponent;
  let fixture: ComponentFixture<AttribuerNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttribuerNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttribuerNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
