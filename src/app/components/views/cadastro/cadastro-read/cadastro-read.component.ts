import { Component } from '@angular/core';
import { CadastroService } from '../cadastro.service';
import { Cadastro } from '../cadastro.model';

@Component({
  selector: 'app-cadastro-read',
  templateUrl: './cadastro-read.component.html',
  styleUrls: ['./cadastro-read.component.css']
})
export class CadastroReadComponent {

  cadastro:Cadastro[] = []

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'duracao', 'idade', 'acoes'];

  constructor(private service: CadastroService) {}

  // Inicialize a propriedade row com dados de exemplo
  row = {
    id: 1,
    nome: 'Exemplo de Nome',
    descricao: 'Exemplo de Descrição',
    duracao: 'Exemplo de Duração',
    idade: 'Exemplo de Idade',
    acoes: 'Exemplo de Ações'
  };

  ngOnInit(): void {
   this.findAll();
    
  }
    findAll(){
      this.service.findAll().subscribe(resposta =>{
        console.log(resposta)
        this.cadastro = resposta;
      })
    }
 
}
