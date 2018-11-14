import { Component, OnInit } from '@angular/core';
import { Whisky } from '../whisky';
import { WhiskyService } from '../whisky.service';

@Component({
  selector: 'app-whisky-add',
  templateUrl: './whisky-add.component.html',
  styleUrls: ['./whisky-add.component.css']
})
export class WhiskyAddComponent implements OnInit {

  whisky = new Whisky;

  constructor(private whiskyService: WhiskyService) { }

  ngOnInit() {
  }

  add(): void {
    console.log(this.whisky.breweryid);
    this.whiskyService.addWhisky(this.whisky)
      .subscribe();
  }

}
