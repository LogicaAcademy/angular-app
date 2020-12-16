import { Component, OnInit } from '@angular/core';
import { Alunno } from '../../alunno';
import { ALUNNI } from '../../mock-alunni';


@Component({
  selector: 'app-alunni',
  templateUrl: './alunni.component.html',
  styleUrls: ['./alunni.component.css']
})
export class AlunniComponent implements OnInit {

  alunni = ALUNNI;
  alunnoSelezionato: Alunno;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(alunno: Alunno): void {
    this.alunnoSelezionato = alunno;
  }

}
