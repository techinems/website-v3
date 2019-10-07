import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMembersTrainingComponent } from './new-members-training.component';

describe('NewMembersTrainingComponent', () => {
  let component: NewMembersTrainingComponent;
  let fixture: ComponentFixture<NewMembersTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMembersTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMembersTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
