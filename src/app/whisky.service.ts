import { Injectable } from '@angular/core';
import { Whisky } from './whisky';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Brewery } from './brewery';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WhiskyService {  

  // private whiskyUrl = 'api/whiskys';  // URL to web api
  private whiskyUrl = 'http://localhost:8080/api/whiskys';  // URL to web api
  private breweryUrl = 'http://localhost:8080/api/breweries';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`WhiskyService: ${message}`);
  }


  getWhiskys(): Observable<Whisky[]> {
  this.messageService.add('WhiskyService: fetched whiskys');
  return this.http.get<Whisky[]>(this.whiskyUrl)
  .pipe(
    tap(_ => this.log('fetched heroes')),
    catchError(this.handleError('getWhiskys', []))
  );
  }

  getWhisky(id: number): Observable<Whisky> {
    const url = `${this.whiskyUrl}/${id}`;
    return this.http.get<Whisky>(url).pipe(
      tap(_ => this.log(`fetched whisky id=${id}`)),
      catchError(this.handleError<Whisky>(`getWhisky id=${id}`))
    );
  }

  getBreweries(): Observable<Brewery[]> {
    this.messageService.add('WhiskyService: fetched brewery');
    return this.http.get<Brewery[]>(this.breweryUrl)
    .pipe(
      tap(_ => this.log('fetched breweries')),
      catchError(this.handleError('getBreweries', []))
    );
    }
  getBrewery(id: number): Observable<Brewery> {
    const url = `${this.breweryUrl}/${id}`;
    return this.http.get<Brewery>(url).pipe(
      tap(_ => this.log(`fetched brewery id=${id}`)),
      catchError(this.handleError<Brewery>(`getBrewery id=${id}`))
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
}
