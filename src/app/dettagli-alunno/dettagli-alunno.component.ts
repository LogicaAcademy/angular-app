import { Component, OnInit, Input } from '@angular/core';
import {Alunno} from '../alunno';

@Component({
  selector: 'app-dettagli-alunno',
  templateUrl: './dettagli-alunno.component.html',
  styleUrls: ['./dettagli-alunno.component.css']
})
export class DettagliAlunnoComponent implements OnInit {

  @Input() alunno: Alunno;

  constructor() { }

  ngOnInit(): void {
  }

}
