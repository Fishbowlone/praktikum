import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Employee, IEmployee} from './heroes/hero';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<IEmployee> {
    console.debug('')
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<IEmployee>(url).pipe(
        tap(() => this.log(`fetched hero id=${id}`)),
        catchError(this.handleError<Employee>(`getHero id=${id}`)),
        map(hero => {
          hero.birthday = new Date(hero.birthday);
          hero.since = new Date(hero.since);
          return hero;
        })
    );
  }
  /** GET heroes from the server */
  getHeroes (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.heroesUrl)
      .pipe(
        tap(() => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', []))
      );
  }
  /** PUT: update the hero on the server */
  updateHero (hero: IEmployee): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(() => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  /** POST: add a new hero to the server */
  addHero (hero: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.heroesUrl, hero, httpOptions).pipe(
      tap(() => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Employee>('addHero'))
    );
  }
  /** DELETE: delete the hero from the server */
  deleteHero (hero: Employee | number): Observable<Employee> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions).pipe(
      tap(() => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Employee>('deleteHero'))
    );
  }
  /** GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Employee[]>(`api/heroes/?name=${term}`).pipe(
      tap(() => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Employee[]>('searchHeroes', []))
    );
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
