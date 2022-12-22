import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pensamento[]>(this.API);
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  alterar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.put<Pensamento>(`${this.API}/${pensamento.id}`, pensamento);
  }

  deletar(id: number): Observable<Pensamento>{
    return this.http.delete<Pensamento>(`${this.API}/${id}`);
  }

  buscarPorId(id: number): Observable<Pensamento>{
    return this.http.get<Pensamento>(`${this.API}/${id}`)
  }
  
}
