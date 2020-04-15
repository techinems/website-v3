import { Component, OnInit } from '@angular/core';
declare var Instafeed: any;
// tslint:disable-next-line:prefer-const
// let isStandardWindow = window.matchMedia('(min-width: 640px)').matches;
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  board: any;

  constructor() { }

  ngOnInit() {
    this.board = new Instafeed({
      // tslint:disable-next-line:max-line-length
      accessToken: 'IGQVJXMGYxcThwa2NKM2FPeGxPcWJ3cmFVREcxeXoxem85YjViXy1mMXl5SWJXVC11QlphRk1mQmVITzA5OTF0eTQ5eUdjNWdyMTg3VEFnbGxNcU5QYzBqTXlRZA1hOVWZAHa3RBVGxiMTRTLTdHNElyTQZDZD',
      template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /></a>',
      resolution: 'low_resolution',
      orientation: 'square',

    });
    this.board.run();
  }

}




