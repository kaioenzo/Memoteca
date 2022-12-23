import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) {}

  listar(filtro: string, pageParam = 0, limitOfPage = 5) {
    let params = new HttpParams().set('_page', pageParam).set('_limit', limitOfPage);
    if(filtro.trim().length > 2) params = params.set("q", filtro);
    return this.http.get<Pensamento[]>(this.API, { params });
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  alterar(id: number, pensamento: Pensamento): Observable<Pensamento> {
    return this.http.put<Pensamento>(`${this.API}/${id}`, pensamento);
  }

  deletar(id: number): Observable<Pensamento> {
    return this.http.delete<Pensamento>(`${this.API}/${id}`);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    return this.http.get<Pensamento>(`${this.API}/${id}`);
  }

  buscarFavoritos(): Observable<Pensamento[]> {
    const params = new HttpParams().set("favorito", true);
    return this.http.get<Pensamento[]>(this.API, {params});
  }

}
