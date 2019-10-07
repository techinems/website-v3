import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceAboutComponent } from './ambulance-about.component';

describe('AmbulanceAboutComponent', () => {
  let component: AmbulanceAboutComponent;
  let fixture: ComponentFixture<AmbulanceAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanceAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
