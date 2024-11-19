import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deputado } from '../Models/Deputado';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private API_BASE = 'https://dadosabertos.camara.leg.br/api/v2';

  constructor(private http: HttpClient) { }

  buscarDeputadosPorNome(nome: string): Observable<Deputado[]> {
    const url = `${this.API_BASE}/deputados?nome=${nome}`;
    return this.http.get<any>(url).pipe(
      map(res => res.dados.map((d: any) => ({
        id: d.id,
        nome: d.nome,
        siglaPartido: d.siglaPartido,
        siglaUf: d.siglaUf,
        urlFoto: d.urlFoto
      })))
    );
  }

  buscarDeputadosPorPartido(partido: string): Observable<Deputado[]> {
    const url = `${this.API_BASE}/deputados?siglaPartido=${partido}`;
    return this.http.get<any>(url).pipe(
      map(res => res.dados.map((d: any) => ({
        id: d.id,
        nome: d.nome,
        siglaPartido: d.siglaPartido,
        siglaUf: d.siglaUf,
        urlFoto: d.urlFoto
      })))
    );
  }
}
