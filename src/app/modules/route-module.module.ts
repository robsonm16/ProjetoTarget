import { ClienteListaComponent } from './../Componentes/cliente-lista/cliente-lista.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from '../Componentes/home/home.component';
import { ClienteCreateComponent } from '../Componentes/cliente-create/cliente-create.component';
import { ClienteEditComponent } from '../componentes/cliente-edit/cliente-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'cliente', component: ClienteListaComponent },
  { path: 'cliente/adicionar', component: ClienteCreateComponent },
  { path: 'cliente/editar/:id', component: ClienteEditComponent },
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
