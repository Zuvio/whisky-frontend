import { Component, OnInit } from '@angular/core';
import { Whisky } from '../whisky';

@Component({
  selector: 'app-whiskys',
  templateUrl: './whiskys.component.html',
  styleUrls: ['./whiskys.component.css']
})
export class WhiskysComponent implements OnInit {

  whisky: Whisky = {
    id: 1,
    name: 'Chivas Regal',
    type: 'blend',
    content: '70cl',
    age: 12,
    prize: 38,
    rating: 8.5,
    brewery_id: 1
  }

  constructor() { }

  ngOnInit() {
  }



}
