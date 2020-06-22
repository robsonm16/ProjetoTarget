import { ClienteListaComponent } from './../Componentes/cliente-lista/cliente-lista.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../Componentes/home/home.component';
import { ClienteFormComponent } from '../Componentes/cliente-form/cliente-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'cliente', component: ClienteListaComponent },
  { path: 'cliente/adicionar', component: ClienteFormComponent },
  { path: 'cliente/editar/:id', component: ClienteFormComponent },
  { path: 'cliente/visualizar/:id', component: ClienteFormComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RouteModule { }
