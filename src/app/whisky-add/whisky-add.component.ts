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

  @Input() whisky: Whisky = new Whisky();
  @Input() brewery: Brewery = new Brewery();


  constructor(private whiskyService: WhiskyService) { }

  ngOnInit() {
  }

  add(whisky, voeding): void {
    this.whiskyService.addWhisky(this.whisky, this.brewery)
      .subscribe();
  }

  

}
