import { Component, OnInit } from '@angular/core';

@Component({
  template: `<rpia-page-content [content]="content"></rpia-page-content>`
})
export class NewMembersTrainingComponent implements OnInit {
  public readonly content = [
    {
      internalTitle: 'Page Header',
      header: 'New Member Training',
      type: 'title',
      centered: true
    },
    {
      body: `Members that are new to RPI Ambulance start out as observers. Observers do not take part in patient care,
        and are only there to observe and learn about the operations and the equipment on the ambulance. The goal of all
        observers is to be promoted to Attendant. All New Members must go through a mandatory OSHA (Occupational Safety
        and Health Administration) safety training, a HIPAA (Health Insurance Portability and Accountability Act)
        patient confidentiality training and and RPI Ambulance Orientation Class.`
    },
    {
      header: 'NRB with the class of 2019',
      internal_title: 'NRB 2019',
      type: 'img',
      img: 'assets/nrb.jpg',
      alt: 'NRB with the class of 2019',
      centered: true
    },
    {
      type: 'divider'
    },
    {
      type: 'embed',
      embedUrl: 'https://drive.google.com/embeddedfolderview?id=0BzoMrS_ZZPigcmJFNzBrMEdHN28',
      height: '300px',
      header: 'New Member Documents'
    }
  ];

  constructor() { }
  ngOnInit() { }
}
