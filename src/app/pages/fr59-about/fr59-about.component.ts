import { Component, OnInit } from '@angular/core';

@Component({
  template: `<rpia-page-content [content]="content"></rpia-page-content>`
})
export class Fr59AboutComponent implements OnInit {
  public readonly content = [
    {
      internalTitle: 'Page Header',
      header: 'About FR-59',
      type: 'title',
      centered: true
    },
    {
      internalTitle: 'About Text',
      type: 'text',
      body: `First Response 59 is RPI Ambulance's first response vehicle. It is a 2007 Ford Explorer that was first
        placed in service with the agency in October of 2014. FR-59 is equipped to NYS Part 800.26 with a full
        complement of disposable medical supplies, splints, epinephrine, a glucometer and a foldable backboard. During
        night crews, it serves to transport the crew from our office to our garage where the ambulance is parked.`
    },
    {
      internalTitle: 'FR Image',
      type: 'img',
      img: 'assets/fr-59.jpg',
      alt: 'Photo of our current first-response vehicle at EMPAC in February of 2015',
      centered: true
    },
    {
      internalTitle: 'Past Ambulances',
      type: 'text',
      header: 'History of FR-59',
      body: `In 2011 discussion of acquiring a First Response type vehicle was brought up by the membership and
        supported by the RPI Administration. Initially the vehicle was to be a new SUV with hybrid engine technology to
        support RPI's Green Initiatives. However due to budget constraints and the fact that adding a new vehicle to the
        RPI Ambulance family would be a major change to the agency's operations, it was decided that a Subaru Forester
        would be converted to a full Emergency Ambulance Service Vehicle. The Forester was first placed in service in
        May of 2012.`
    },
    {
      internalTitle: 'Old FR Image',
      type: 'img',
      img: 'assets/fr-59-old.jpg',
      alt: 'Photo of our old first-response vehicle at the RPI Houston Field House',
      centered: true
    },
    {
      internalTitle: 'Replacement of old FR-59',
      type: 'text',
      body: `It unfortunately did not take long for the Forester to be plagued by various mechanical problems. So, in
        Spring of 2014, the agency began the search for a new first response vehicle. After testing several different
        options, it was decided that the 2007 Ford Explorer would be the newest addition to the RPIA fleet.`
    }
  ];

  constructor() { }
  ngOnInit() { }
}
