import { Component, OnInit, Input } from '@angular/core';
import { Brewery } from '../brewery';
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

  constructor(
    private route: ActivatedRoute,
    private whiskyService: WhiskyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBrewery();
  }

  getBrewery(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.whiskyService.getBrewery(id)
    .subscribe(brewery => this.brewery = brewery);
  }

  goBack(): void {
    this.location.back();
  }

}
