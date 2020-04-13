import { Component, OnInit } from '@angular/core';
declare var Instafeed: any;

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
      accessToken: 'IGQVJXMGYxcThwa2NKM2FPeGxPcWJ3cmFVREcxeXoxem85YjViXy1mMXl5SWJXVC11QlphRk1mQmVITzA5OTF0eTQ5eUdjNWdyMTg3VEFnbGxNcU5QYzBqTXlRZA1hOVWZAHa3RBVGxiMTRTLTdHNElyTQZDZD'
    });
    this.board.run();
  }

}




