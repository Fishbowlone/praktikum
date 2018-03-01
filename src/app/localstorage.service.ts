import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Employee, IEmployee} from './heroes/hero';

@Injectable()
export class LocalstorageService {

  constructor() { }

  /** Saves/updates the inputs to the localstorage */
  SaveLocalstorage (Data: IEmployee[]): any {
    console.debug('Savelocalstorage');
    window.localStorage.setItem('Data', JSON.stringify(Data));
  }

  /** Loads the data from the servers in-memory-data.service */
  LoadLocalstorage (): Observable<IEmployee[]> {
    console.debug('LoadLocalstorage');
    return JSON.parse(window.localStorage.getItem('Data'));
  }
}
