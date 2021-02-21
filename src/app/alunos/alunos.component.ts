import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {

  constructor() { }

  @Input() valorInicial = 10;

  ngOnInit(): void {
  }

}
