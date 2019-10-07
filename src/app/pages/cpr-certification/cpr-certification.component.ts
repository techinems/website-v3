import { Component, OnInit } from '@angular/core';

@Component({
  template: `<rpia-page-content [content]="content"></rpia-page-content>`
})
export class CprCertificationComponent implements OnInit {
  public readonly content = [
    {
      internalTitle: 'Page Header',
      header: 'New Member Training',
      type: 'title',
      centered: true
    },
    {
      body: `RPI Ambulance typically holds CPR and First Aid classes several times a semester. Certification is provided
        by the American Heart Association and is applicable for community members, Lifeguards, EMS personnel, etc.
        Anyone part of the RPI Community can take part of one of our CPR or First Aid classes. CPR classes can also be
        arranged for those outside of the RPI community. Anyone interested in attending, or receiving more information
        about CPR training should <a href="/contact">contact us</a>. Dates can be arranged to provide a mutually
        agreeable time for clubs or community groups.`
    }
  ];

  constructor() { }
  ngOnInit() { }
}
