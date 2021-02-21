import { Component, OnInit } from '@angular/core';
import { alunos } from '../model/alunnos';
import { professores } from '../model/professores';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela = false;

  listaAlunos: alunos[] = [
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Teste', idade: 25, email: 'Teste@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Teste 2', idade: 31, email: 'Teste2@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Teste 3', idade: 45, email: 'Teste3@gmail.com', curso: 'Sistemas da informacao' }
  ];

  listaProfessores: professores[] = [
    { nome: 'Camila', idade: 27, email: 'camila.taruma@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Teste', idade: 25, email: 'Teste@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Teste 2', idade: 31, email: 'Teste2@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Teste 3', idade: 45, email: 'Teste3@gmail.com', curso: 'Sistemas da informacao' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }
  // tslint:disable-next-line:typedef
  mudarValor() {
    this.valor++;
  }

  // tslint:disable-next-line:typedef
  reiniciarValor() {
    this.valor = 0;
  }

  // tslint:disable-next-line:typedef
  exibirTabela(){
    this.exibeTabela = true;
  }

}
