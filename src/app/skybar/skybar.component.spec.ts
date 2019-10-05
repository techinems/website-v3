import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkybarComponent } from './skybar.component';

describe('SkybarComponent', () => {
  let component: SkybarComponent;
  let fixture: ComponentFixture<SkybarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkybarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkybarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
