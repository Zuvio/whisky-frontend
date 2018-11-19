import { Injectable } from '@angular/core';
import { Whisky } from './whisky';
import { Adres } from './adres';
import { Brewery } from './brewery';
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

  private whiskyUrl = 'http://localhost:8080/api/whiskys';
  private breweryUrl = 'http://localhost:8080/api/breweries';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }



  /** W H I S K Y   F U N C T I O N S  ---------------------------- */

  getWhiskys(): Observable<Whisky[]> {
  this.messageService.add('WhiskyService: fetched whiskys');
  return this.http.get<Whisky[]>(this.whiskyUrl)
  .pipe(
    tap(_ => this.log('fetched whiskys')),
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

    /** POST: add a new Whisky linked to a brewery*/
    addWhisky(whisky: Whisky, brewery: Brewery): Observable<Whisky> {
      const id = typeof brewery === 'number' ? brewery : brewery.id;
      const url = `${this.breweryUrl}/${id}/whisky`;
      var data = 

      /** Nu eerst de object versie, dan moet je ook 'data' door 'whisky' vervangen in de http.post!!! 
      // whisky.brewery = { "id": brewery.id}

      /** dit is de uitgeschreven versie = beter! 'data' aan http.post meegeven */
      {"whiskyname": whisky.whiskyname, "type": whisky.type, "content":whisky.content
      ,"age":whisky.age, "prize":whisky.prize, "rating": whisky.rating
      ,"brewery": { "id": brewery.id}};

      console.log(data);
      return this.http.post<Whisky>(url, data, httpOptions).pipe(
        tap((whisky: Whisky) => this.log(`added whisky w/ id=${brewery.id}`)),
        catchError(this.handleError<Whisky>('addWhisky'))
      );
}


  /** B R E W E R Y   F U N C T I O N S ---------------------------- */

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
  getAdresses(): Observable<Adres[]> {
    this.messageService.add('WhiskyService: fetched adres');
    return this.http.get<Adres[]>(this.breweryUrl)
    .pipe(
      tap(_ => this.log('fetched adresses')),
      catchError(this.handleError('getAdresses', []))
    );
  } 
  getAdres(id: number): Observable<Adres> {
    const url = `${this.breweryUrl}/${id}/adres`;
    return this.http.get<Adres>(url).pipe(
      tap(_ => this.log(`fetched adres id=${id}`)),
      catchError(this.handleError<Adres>(`getAdres id=${id}`))
    );
  }







  /** O T H E R   F U N C T I O N S ---------------------------- */

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

  /** Log a WhiskyService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`WhiskyService: ${message}`);
    }
}
