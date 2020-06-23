import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouteModule } from './modules/route-module.module';
import { ClienteListaComponent } from './Componentes/cliente-lista/cliente-lista.component';
import { ClienteCreateComponent } from './Componentes/cliente-create/cliente-create.component';
import { HttpClientModule } from '@angular/common/http';

import { ClienteEditComponent } from './componentes/cliente-edit/cliente-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClienteListaComponent,
    ClienteCreateComponent,
    ClienteEditComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
