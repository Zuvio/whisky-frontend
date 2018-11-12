import { Component, OnInit,Input } from '@angular/core';
import { Whisky } from '../whisky';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { WhiskyService }  from '../whisky.service';

@Component({
  selector: 'app-whisky-detail',
  templateUrl: './whisky-detail.component.html',
  styleUrls: ['./whisky-detail.component.css']
})
export class WhiskyDetailComponent implements OnInit {

  @Input() whisky: Whisky;

  constructor(
    private route: ActivatedRoute,
    private whiskyService: WhiskyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getWhisky();
  }

  getWhisky(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.whiskyService.getWhisky(id)
    .subscribe(whisky => this.whisky = whisky);
  }

  goBack(): void {
    this.location.back();
  }

}
