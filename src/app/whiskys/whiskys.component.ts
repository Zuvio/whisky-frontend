import { Component, OnInit } from '@angular/core';
import { Whisky } from '../whisky';
import { WHISKYS } from '../mock-whiskys';

@Component({
  selector: 'app-whiskys',
  templateUrl: './whiskys.component.html',
  styleUrls: ['./whiskys.component.css']
})
export class WhiskysComponent implements OnInit {

  whiskys = WHISKYS;
  selectedWhisky: Whisky;

  constructor() { }

  ngOnInit() {
  }

  onSelect(whisky: Whisky): void {
  this.selectedWhisky = whisky;
}

}
