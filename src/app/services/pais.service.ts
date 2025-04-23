import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private http: HttpClient ) { }

  getPaises() {
    return this.http.get<any[]>('https://restcountries.com/v3.1/lang/spanish').pipe(
      map(paises => paises.map(pais => ({
        nombre: pais.name.common,
        codigo: pais.cca3
      })))
    );
  }

}
