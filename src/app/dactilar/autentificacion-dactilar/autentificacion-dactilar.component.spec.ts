import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutentificacionDactilarComponent } from './autentificacion-dactilar.component';

describe('AutentificacionDactilarComponent', () => {
  let component: AutentificacionDactilarComponent;
  let fixture: ComponentFixture<AutentificacionDactilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutentificacionDactilarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutentificacionDactilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
