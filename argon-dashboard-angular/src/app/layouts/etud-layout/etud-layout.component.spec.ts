import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudLayoutComponent } from './etud-layout.component';

describe('EtudLayoutComponent', () => {
  let component: EtudLayoutComponent;
  let fixture: ComponentFixture<EtudLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
