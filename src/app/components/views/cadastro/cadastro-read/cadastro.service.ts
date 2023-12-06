import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl: String = environment.baseUrl;

  constructor( private http: HttpClient) { }

  findAll():Observable<Cadastro[]> {
    const url = `${this.url}/cadastro`
    return this.htpp.get<Cadastro[]>(url)

  }
}
