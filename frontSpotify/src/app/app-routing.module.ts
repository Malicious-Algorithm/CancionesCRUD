import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Modulos
import { CrearListaRepComponent } from './components/crear-lista-rep/crear-lista-rep.component';
import { ListarCancionesComponent } from './components/listar-canciones/listar-canciones.component';

const routes: Routes = [
  { path: '', component: ListarCancionesComponent },
  { path: 'crear-lista', component: CrearListaRepComponent },
  { path: 'editar-cancion/:id', component: CrearListaRepComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
