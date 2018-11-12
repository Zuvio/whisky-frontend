import { Injectable } from '@angular/core';
import { Whisky } from './whisky';
import { WHISKYS } from './mock-whiskys';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WhiskyService {

  getWhiskys(): Observable<Whisky[]> {
    // TODO: send the message _after_ fetching the whiskys
    this.messageService.add('WhiskyService: fetched whiskys');
    return of(WHISKYS);
  }

  getWhisky(id: number): Observable<Whisky> {
    // TODO: send the message _after_ fetching the whisky
    this.messageService.add(`WhiskyService: fetched whisky id=${id}`);
    return of(WHISKYS.find(whisky => whisky.id === id));
  }

  constructor(private messageService: MessageService) { }
}
