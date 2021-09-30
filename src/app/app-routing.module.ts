import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PacienteComponent } from './paciente/paciente.component';
import {MedicoComponent } from './medico/medico.component';
import {InsertarComponent } from './insertar/insertar.component';
import {EstadisticaComponent } from './estadistica/estadistica.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'paciente', component: PacienteComponent},
  { path: 'medico', component: MedicoComponent},
  { path: 'estadistica', component: EstadisticaComponent},
  { path: 'insertar', component: InsertarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
