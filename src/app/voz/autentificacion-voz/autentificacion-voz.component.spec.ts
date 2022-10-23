import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentificacionVozComponent } from './autentificacion-voz.component';

describe('AutentificacionVozComponent', () => {
  let component: AutentificacionVozComponent;
  let fixture: ComponentFixture<AutentificacionVozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutentificacionVozComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutentificacionVozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
