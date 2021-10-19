import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { Cancion } from 'src/app/models/cancion';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-crear-lista-rep',
  templateUrl: './crear-lista-rep.component.html',
  styleUrls: ['./crear-lista-rep.component.css']
})
export class CrearListaRepComponent implements OnInit {

  listaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private cancionService: CancionService) {
    this.listaForm = this.fb.group({
      nombre: ['', Validators.required],
      autor: ['', Validators.required],
      ano: ['', Validators.nullValidator]
    });

  }

  ngOnInit(): void {
  }

  agregarCancion(){
    console.log(this.listaForm);

    console.log(this.listaForm.get('nombre')?.value);

    //creando el objeto CANCION, usando la "interface" Cancion
    //es un objeto de "tipo de" Cancion, ya que usa las propiedades que hemos definido
    //en la interface, por ej: "auto", nos daría error, ya que le estamos dando un campo que no
    //está definido en la interface Cancion.
    const CANCION: Cancion = { 
      nombre: this.listaForm.get('nombre')?.value,
      autor: this.listaForm.get('autor')?.value,
      ano: this.listaForm.get('ano')?.value,
    };

    console.log(CANCION);
    this.cancionService.guardarCancion(CANCION).subscribe((data) => {
      console.log("guardada");
      this.router.navigate(['/']); //esto lo podríamos haber hecho en el html con un routerLink="/"
    }, (error) =>{
      console.log(error);
    });
  }
}
