import { Component, OnInit } from '@angular/core';
import { Whisky } from '../whisky';
import { WhiskyService } from '../whisky.service';

@Component({
  selector: 'app-whiskys',
  templateUrl: './whiskys.component.html',
  styleUrls: ['./whiskys.component.css']
})
export class WhiskysComponent implements OnInit {

  whiskys : Whisky[];

  constructor(private whiskyService: WhiskyService) { }

  ngOnInit() {
    this.getWhiskys();
  }

  getWhiskys(): void {
    this.whiskyService.getWhiskys()
    .subscribe(whiskys => this.whiskys = whiskys);
  }

}
