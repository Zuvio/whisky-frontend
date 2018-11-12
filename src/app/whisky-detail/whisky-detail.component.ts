import { Component, OnInit,Input } from '@angular/core';
import { Whisky } from '../whisky';

@Component({
  selector: 'app-whisky-detail',
  templateUrl: './whisky-detail.component.html',
  styleUrls: ['./whisky-detail.component.css']
})
export class WhiskyDetailComponent implements OnInit {

  @Input() whisky: Whisky;

  constructor() { }

  ngOnInit() {
  }

}
