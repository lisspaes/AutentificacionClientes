import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutentificacionDactilarComponent } from './dactilar/autentificacion-dactilar/autentificacion-dactilar.component';
import { AutentificacionFacialComponent } from './facial/autentificacion-facial/autentificacion-facial.component';
import { AutentificacionVozComponent } from './voz/autentificacion-voz/autentificacion-voz.component';
import { HomeComponent } from './inicio/home/home.component';
import { ResultadosComponent } from './resultados/resultados/resultados.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dactilar', component:AutentificacionDactilarComponent},
  {path:'facial', component:AutentificacionFacialComponent},
  {path:'voz', component:AutentificacionVozComponent},
  {path:'resultados', component:ResultadosComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    AutentificacionDactilarComponent,
    AutentificacionFacialComponent,
    AutentificacionVozComponent,
    HomeComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
