import { Component, OnInit } from '@angular/core';

@Component({
  template: `<rpia-page-content [content]="content"></rpia-page-content>`
})
export class RpiaAboutComponent implements OnInit {
  public readonly content = [
    {
      internalTitle: 'Page Header',
      header: 'About RPI Ambulance',
      type: 'title',
      centered: true
    },
    {
      internalTitle: 'About Text',
      type: 'text',
      body: `RPI Ambulance is a student run and operated Basic Life Support (BLS) transporting ambulance agency
        that serves the RPI campus and surrounding communities. We respond to approximately 150 to 200 calls
        and provide first aid coverage to about 30 special events every academic year. All students of RPI are
        eligible to join RPI Ambulance, no previous experience is necessary. Members can train to become drivers,
        crew chiefs or just come to help out!`
    },
    {
      internalTitle: 'Ambulance Image',
      type: 'img',
      img: 'assets/new_fleet.jpg',
      width: '75%',
      alt: 'RPI Ambulance\'s Fleet',
      centered: true
    },
    {
      internalTitle: 'History',
      type: 'text',
      header: 'Our History',
      body: `RPI Ambulance was founded in 1977 as the first EMS agency in Troy and the surrounding
        area. Today, RPIA serves the RPI campus as well as some of the surrounding towns. We mainly respond to
        on-campus calls, but also receive mutual aid calls to Brunswick, North Greenbush (including Wynantskill
        and Defreestville), and Poestenkill.`
    }
  ]

  constructor() { }
  ngOnInit() { }
}
