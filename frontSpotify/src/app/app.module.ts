import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CrearListaRepComponent } from './components/crear-lista-rep/crear-lista-rep.component';
import { ListarCancionesComponent } from './components/listar-canciones/listar-canciones.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearListaRepComponent,
    ListarCancionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
