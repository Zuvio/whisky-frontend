import { Component, OnInit, Input } from '@angular/core';
import { Brewery } from '../brewery';
import { Adres } from '../adres';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WhiskyService }  from '../whisky.service';


@Component({
  selector: 'app-brewery-detail',
  templateUrl: './brewery-detail.component.html',
  styleUrls: ['./brewery-detail.component.css']
})
export class BreweryDetailComponent implements OnInit {

  @Input() brewery: Brewery;
  @Input() adres: Adres;

  constructor(
    private route: ActivatedRoute,
    private whiskyService: WhiskyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBrewery();
    this.getAdres();
  }

  getBrewery(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.whiskyService.getBrewery(id)
    .subscribe(brewery => this.brewery = brewery);
  }

  getAdres(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.whiskyService.getAdres(id)
    .subscribe(adres => this.adres = adres);
  }

  goBack(): void {
    this.location.back();
  }

}
