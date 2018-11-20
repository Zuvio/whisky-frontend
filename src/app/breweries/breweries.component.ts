import { Component, OnInit } from '@angular/core';
import { WhiskyService } from '../whisky.service';
import { Brewery } from '../brewery';
import { Adres } from '../adres';

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html',
  styleUrls: ['./breweries.component.css']
})
export class BreweriesComponent implements OnInit {

  breweries: Brewery[];
  adrescountry: Adres[];

  constructor(private whiskyService: WhiskyService) { }

  ngOnInit() {
    this.getBreweries();
  }

  getBreweries(): void {
    this.whiskyService.getBreweries()
    .subscribe(breweries => this.breweries = breweries);
  }

  

}
