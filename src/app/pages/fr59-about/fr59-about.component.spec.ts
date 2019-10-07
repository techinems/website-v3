import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fr59AboutComponent } from './fr59-about.component';

describe('Fr59AboutComponent', () => {
  let component: Fr59AboutComponent;
  let fixture: ComponentFixture<Fr59AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fr59AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fr59AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
