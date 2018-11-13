import { Component, OnInit } from '@angular/core';
import { Whisky } from '../whisky';
import { Brewery } from '../brewery';
import { WhiskyService } from '../whisky.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  whiskys: Whisky[] = [];
  breweries: Brewery[] = [];

  constructor(private whiskyService: WhiskyService) { }

  ngOnInit() {
    this.getWhiskys();
    this.getBreweries();
  }

  getWhiskys(): void {
    this.whiskyService.getWhiskys()
      .subscribe(whiskys => this.whiskys = whiskys.slice(1, 5));
  }
  getBreweries(): void {
    this.whiskyService.getBreweries()
      .subscribe(breweries => this.breweries = breweries.slice(1, 5));
  }
}