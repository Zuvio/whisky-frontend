import { Component, OnInit } from '@angular/core';
import { Whisky } from '../whisky';
import { WhiskyService } from '../whisky.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  whiskys: Whisky[] = [];

  constructor(private whiskyService: WhiskyService) { }

  ngOnInit() {
    this.getWhiskys();
  }

  getWhiskys(): void {
    this.whiskyService.getWhiskys()
      .subscribe(whiskys => this.whiskys = whiskys.slice(1, 5));
  }
}