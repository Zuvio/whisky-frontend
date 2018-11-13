import { Injectable } from '@angular/core';
import { Whisky } from './whisky';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WhiskyService {  

  // private whiskyUrl = 'api/whiskys';  // URL to web api
  private whiskyUrl = 'http://localhost:8080/api/whiskys';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`WhiskyService: ${message}`);
  }


  getWhiskys(): Observable<Whisky[]> {
  // TODO: send the message _after_ fetching the whiskys
  this.messageService.add('WhiskyService: fetched whiskys');
  return this.http.get<Whisky[]>(this.whiskyUrl)
  .pipe(
    tap(_ => this.log('fetched heroes')),
    catchError(this.handleError('getWhiskys', []))
  );
  }

  /** GET hero by id. Will 404 if id not found */
  getWhisky(id: number): Observable<Whisky> {
    const url = `${this.whiskyUrl}/${id}`;
    return this.http.get<Whisky>(url).pipe(
      tap(_ => this.log(`fetched whisky id=${id}`)),
      catchError(this.handleError<Whisky>(`getWhisky id=${id}`))
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
