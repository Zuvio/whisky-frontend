import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Whisky } from './whisky';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const whiskys = [
      {id: 1, name: 'Whisky1', type: 'blend', content: '70cl', age: 12, prize: 38, rating: 8.5, brewery_id: 1},
      {id: 2, name: 'Whisky2', type: 'blend', content: '70cl', age: 12, prize: 38, rating: 8.5, brewery_id: 1},
      {id: 3, name: 'Whisky3', type: 'blend', content: '70cl', age: 12, prize: 38, rating: 8.5, brewery_id: 1},
      {id: 4, name: 'Whisky4', type: 'blend', content: '70cl', age: 12, prize: 38, rating: 8.5, brewery_id: 2},
      {id: 5, name: 'Whisky5', type: 'blend', content: '70cl', age: 12, prize: 38, rating: 8.5, brewery_id: 2},
      {id: 6, name: 'Whisky6', type: 'blend', content: '70cl', age: 12, prize: 38, rating: 8.5, brewery_id: 2},
      {id: 7, name: 'Whisky7', type: 'blend', content: '70cl', age: 12, prize: 38, rating: 8.5, brewery_id: 3},
      {id: 8, name: 'Whisky8', type: 'blend', content: '70cl', age: 12, prize: 38, rating: 8.5, brewery_id: 3},
      {id: 9, name: 'Whisky9', type: 'blend', content: '70cl', age: 12, prize: 38, rating: 8.5, brewery_id: 3},
  ];
    return {whiskys};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(whiskys: Whisky[]): number {
    return whiskys.length > 0 ? Math.max(...whiskys.map(whisky => whisky.id)) + 1 : 11;
  }
}