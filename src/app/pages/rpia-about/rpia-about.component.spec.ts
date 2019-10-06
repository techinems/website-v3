import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpiaAboutComponent } from './rpia-about.component';

describe('RpiaAboutComponent', () => {
  let component: RpiaAboutComponent;
  let fixture: ComponentFixture<RpiaAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpiaAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpiaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
