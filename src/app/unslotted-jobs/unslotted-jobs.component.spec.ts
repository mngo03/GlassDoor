import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnslottedJobsComponent } from './unslotted-jobs.component';

describe('UnslottedJobsComponent', () => {
  let component: UnslottedJobsComponent;
  let fixture: ComponentFixture<UnslottedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnslottedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnslottedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
