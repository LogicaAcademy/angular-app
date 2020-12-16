import { Component, OnInit } from '@angular/core';
import { Alunno } from '../alunno';
import { ALUNNI } from '../mock-alunni';
import { AlunniService } from '../alunni.service';


@Component({
  selector: 'app-alunni',
  templateUrl: './alunni.component.html',
  styleUrls: ['./alunni.component.css']
})
export class AlunniComponent implements OnInit {

  alunni: Alunno[];
  alunnoSelezionato: Alunno;

  constructor( private alunniService: AlunniService ) { }

  ngOnInit(): void {
    this.getAlunni();
  }

  onSelect(alunno: Alunno): void {
    this.alunnoSelezionato = alunno;
  }

  getAlunni(): void {
    this.alunniService.getAlunni()
      .subscribe(alunni => this.alunni = alunni);
  }

}
