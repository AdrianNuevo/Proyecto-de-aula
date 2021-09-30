import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicoComponent } from './medico/medico.component';
import { PacienteComponent } from './paciente/paciente.component';
import { NavegarComponent } from './navegar/navegar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { HCComponent } from './hc/hc.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    PacienteComponent,
    NavegarComponent,
    InsertarComponent,
    HCComponent,
    EstadisticaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
