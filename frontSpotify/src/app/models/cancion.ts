export class Cancion {
    
    _id?: number; //lo necesito para identificar en el metodo eliminar!
    nombre: string;
    autor: string;
    ano: number;

    constructor(nombre: string, autor: string, ano: number){
        this.nombre = nombre;
        this.autor = autor;
        this.ano = ano;
    }
}