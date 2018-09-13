import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPerformanceTitleComponent } from './job-performance-title.component';

describe('JobPerformanceTitleComponent', () => {
  let component: JobPerformanceTitleComponent;
  let fixture: ComponentFixture<JobPerformanceTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPerformanceTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPerformanceTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
