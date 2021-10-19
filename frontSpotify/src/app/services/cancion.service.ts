import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cancion } from '../models/cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  url = 'http://localhost:4000/api/canciones/';

  //mis peticiones HTTP
  constructor(private http: HttpClient) { }

  getCanciones(): Observable<any> {
    return this.http.get(this.url); //observable
  }

  eliminarCancion(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarCancion(cancion: Cancion): Observable<any>{
    return this.http.post(this.url, cancion);
  }

 
}
