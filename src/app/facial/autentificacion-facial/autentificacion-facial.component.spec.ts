import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentificacionFacialComponent } from './autentificacion-facial.component';

describe('AutentificacionFacialComponent', () => {
  let component: AutentificacionFacialComponent;
  let fixture: ComponentFixture<AutentificacionFacialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutentificacionFacialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutentificacionFacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
