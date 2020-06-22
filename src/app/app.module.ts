import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouteModule } from './route-module/route-module.module';
import { ClienteListaComponent } from './Componentes/cliente-lista/cliente-lista.component';
import { ClienteFormComponent } from './Componentes/cliente-form/cliente-form.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ClienteListaComponent,
    ClienteFormComponent
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
