import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterNotesComponent } from './consulter-notes.component';

describe('ConsulterNotesComponent', () => {
  let component: ConsulterNotesComponent;
  let fixture: ComponentFixture<ConsulterNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
