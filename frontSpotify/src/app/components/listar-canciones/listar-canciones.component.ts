import { Component, OnInit } from '@angular/core';


import { Cancion } from 'src/app/models/cancion';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-listar-canciones',
  templateUrl: './listar-canciones.component.html',
  styleUrls: ['./listar-canciones.component.css']
})
export class ListarCancionesComponent implements OnInit {

  listCanciones: Cancion[] = []; //inicie con un arr vacio

  constructor(private cancionService: CancionService) { }

  ngOnInit(): void {
    this.obtenerCanciones();
  }

  //recordar que los observables que se subscriben al observador tienen 3 metodos
    //next() == data
    //error() == error
  obtenerCanciones(){
    this.cancionService.getCanciones().subscribe((data) =>{
      console.log("datos:");
      console.log(data);
      this.listCanciones = data;
    }, (error) =>{
      console.log(error);
    })
  }

  eliminarCancion(id: any){
    this.cancionService.eliminarCancion(id).subscribe((data) =>{
      console.log("cancion eliminada!");
      this.obtenerCanciones();
    }, (error) =>{
      console.log(error);
    })
  }

  play(){
    console.log("Playing");
  }
}
