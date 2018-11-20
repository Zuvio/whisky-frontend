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
  adres: Adres = new Adres();

  constructor(private whiskyService: WhiskyService) { }

  ngOnInit() {
    this.getBreweries();
  }

  getBreweries(): void {
    this.whiskyService.getBreweries()
    .subscribe(breweries => this.breweries = breweries);
  }
  
  search(adres): void {
    console.log(this.adres.country);
    this.whiskyService.findAddresses(this.adres.country)    
    .subscribe(adrescountry => this.adrescountry = adrescountry);
  }


}
