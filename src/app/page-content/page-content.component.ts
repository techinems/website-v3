import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'rpia-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  @Input() public content = [];
  @Input() public splitColumns = false;

  constructor(private sanitizer: DomSanitizer) { }
  ngOnInit() { }

  getColClasses(contentElement) {
    return {
      'col-md-10 offset-md-1': contentElement.type === 'img',
      'col-md-6': this.splitColumns && contentElement.type !== 'img' && contentElement.type !== 'title',
      'col-12': !this.splitColumns || contentElement.type === 'title',
      'text-center': contentElement.centered
    };
  }

  safeEmbedUrl(contentElement) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(contentElement.embedUrl);
  }
  
  embedStyles(contentElement) {
    return { 'height': contentElement.height };
  }
}
