import { Component } from '@angular/core';

import { services } from './services';

@Component({
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.scss']
})
export class ServiceListComponent {
  services = services;
  
  selectT1() {
    var modal = document.getElementById("popup");
    modal.style.display = "block";
  }

  selectT2() {
    var modal = document.getElementById("popup");
    modal.style.display = "block";
  }

  selectT3() {
    var modal = document.getElementById("popup");
    modal.style.display = "block";
  }

  close() {
    var modal = document.getElementById("popup");
    modal.style.display = "none";
  }
}
