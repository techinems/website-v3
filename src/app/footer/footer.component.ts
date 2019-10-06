import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rpia-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getFooterYear(): string {
    return new Date().getFullYear().toString().substr(-2);
  }
}
