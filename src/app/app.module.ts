import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CarritoComponent } from './carrito/carrito.component';
import { KdlContactoComponent } from './kdl-contacto/kdl-contacto.component';
import { KdlCursosComponent } from './kdl-cursos/kdl-cursos.component';
import { BtnVermasComponent } from './btn-vermas/btn-vermas.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosListComponent,
    CarritoComponent,
    KdlContactoComponent,
    KdlCursosComponent,
    BtnVermasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
