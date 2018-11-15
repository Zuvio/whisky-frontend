import { Component, OnInit, Input } from '@angular/core';
import { Whisky } from '../whisky';
import { WhiskyService } from '../whisky.service';
import { Brewery } from '../brewery';

@Component({
  selector: 'app-whisky-add',
  templateUrl: './whisky-add.component.html',
  styleUrls: ['./whisky-add.component.css']
})
export class WhiskyAddComponent implements OnInit {

whisky: Whisky = new Whisky();
brewery: Brewery = new Brewery();

  breweries: Brewery[];


  constructor(private whiskyService: WhiskyService) { }

  ngOnInit() {
    this.getBreweries();
  }

  add(whisky, voeding): void {
    this.whiskyService.addWhisky(this.whisky, this.brewery)
      .subscribe();
  }

  getBreweries(): void {
    this.whiskyService.getBreweries()
    .subscribe(breweries => this.breweries = breweries);
  }
}

  


