import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpia-skybar',
  templateUrl: './skybar.component.html',
  styleUrls: ['./skybar.component.scss']
})
export class SkybarComponent implements OnInit {
  public readonly social = [
    { externalLink: 'https://www.facebook.com/rpiamb', icon: 'fab fa-facebook-f' },
    { externalLink: 'https://www.instagram.com/rpiambulance', icon: 'fab fa-instagram' },
    { externalLink: 'https://reddit.com/u/RPIAMBULANCE', icon: 'fab fa-reddit-alien' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
