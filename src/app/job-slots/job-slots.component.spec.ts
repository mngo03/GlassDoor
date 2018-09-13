import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSlotsComponent } from './job-slots.component';

describe('JobSlotsComponent', () => {
  let component: JobSlotsComponent;
  let fixture: ComponentFixture<JobSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
