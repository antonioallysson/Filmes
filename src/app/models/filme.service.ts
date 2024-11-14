import { Injectable } from '@angular/core';
import { Filme } from './filme';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private API = 'https://www.omdbapi.com/?apikey=901e7526'

  constructor(private http: HttpClient) { }

  buscarFilmePorTitulo(titulo: string): Observable<Filme> {
    return this.http.get<Filme>(`${this.API}&t=${titulo}`)
  }
}
