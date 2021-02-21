import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  constructor() { }
  
  @Input() valorInicial = 5;

  ngOnInit(): void {
  }

}
