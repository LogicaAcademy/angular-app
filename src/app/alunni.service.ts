import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {Alunno} from './alunno';
import { ALUNNI} from './mock-alunni';

@Injectable({
  providedIn: 'root'
})
export class AlunniService {

  constructor() { }

  getAlunni(): Observable<Alunno[]> {
    // TODO: send the message _after_ fetching the heroes
    return of(ALUNNI);
  }

}
