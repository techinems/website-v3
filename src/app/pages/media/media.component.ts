import { Component, OnInit } from '@angular/core';

@Component({
  template: `<rpia-page-content [content]="content"></rpia-page-content>`
})
export class MediaComponent implements OnInit {
  public readonly content = [
    {
      internalTitle: 'Page Header',
      header: 'Media',
      type: 'title',
      centered: true
    },
    {
      internalTitle: 'FR on Ice',
      type: 'img',
      img: 'assets/fr-59-ice.jpg',
      header: 'FR-59 on the ice at the Houston Field House in October 2015',
      alt: 'FR-59 on the ice at the Houston Field House in October 2015',
      centered: true
    },
    {
      internalTitle: 'A-39 and 5939',
      type: 'img',
      img: 'assets/a39-5939.jpg',
      header: '5939 and A-39 in Spring of 2007',
      alt: '5939 and A-39 in Spring of 2007',
      centered: true
    }
  ];

  constructor() { }
  ngOnInit() { }
}
