import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPerformanceDayComponent } from './job-performance-day.component';

describe('JobPerformanceDayComponent', () => {
  let component: JobPerformanceDayComponent;
  let fixture: ComponentFixture<JobPerformanceDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPerformanceDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPerformanceDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
