import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cadastro } from './cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl: string = environment.baseUrl; // Use "string" em minúsculas

  constructor(private http: HttpClient) {}

  findAll(): Observable<Cadastro[]> { // Certifique-se de que o tipo Cadastro está corretamente importado
    const url = `${this.baseUrl}/Cadastro`;
    return this.http.get<Cadastro[]>(url);
  }
}
