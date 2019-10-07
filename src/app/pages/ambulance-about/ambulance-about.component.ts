import { Component, OnInit } from '@angular/core';

@Component({
  template: `<rpia-page-content [content]="content"></rpia-page-content>`
})
export class AmbulanceAboutComponent implements OnInit {
  public readonly content = [
    {
      internalTitle: 'Page Header',
      header: 'About 5939',
      type: 'title',
      centered: true
    },
    {
      internalTitle: 'About Text',
      type: 'text',
      body: `RPI Ambulance operates a 2006 AEV Trauma Hawk XL Type II ambulance mounted on a Ford E-350 chassis. This
        vehicle was placed in service in the Spring of 2007. The county vehicle identifier is 5939, however the
        ambulance was formerly known as A-39 and continues to hold this call sign within the agency. 5939 is the fifth
        van ambulance operated by RPI Ambulance. The first was placed in service in 1983.`
    },
    {
      internalTitle: 'Ambulance Image',
      type: 'img',
      img: 'assets/5939.jpg',
      alt: 'Photo of our ambulance, 5939, in October 2015',
      centered: true
    },
    {
      internalTitle: 'Past Ambulances',
      type: 'text',
      header: 'Past Ambulances',
      body: `In Spring 2007, 5939 was delivered to replace the aging A-39. A-39 had proudly served the agency for 10
        years before being retired. The agency has also operated several other ambulances, the first of which is
        rumored to have been given to RPI Ambulance when members saved a member of the faculty from choking in one of
        the dining halls.`
    }
  ]

  constructor() { }
  ngOnInit() { }
}
