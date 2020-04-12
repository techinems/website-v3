import { Component, OnInit } from '@angular/core';
import * as Instafeed from 'instafeed.js';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


const feed =  new Instafeed({
  // tslint:disable-next-line:max-line-length
  accessToken: 'IGQVJXMGYxcThwa2NKM2FPeGxPcWJ3cmFVREcxeXoxem85YjViXy1mMXl5SWJXVC11QlphRk1mQmVITzA5OTF0eTQ5eUdjNWdyMTg3VEFnbGxNcU5QYzBqTXlRZA1hOVWZAHa3RBVGxiMTRTLTdHNElyTQZDZD'
});
feed.run();

