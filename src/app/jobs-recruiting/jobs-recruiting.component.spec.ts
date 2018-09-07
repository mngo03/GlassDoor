import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsRecruitingComponent } from './jobs-recruiting.component';

describe('JobsRecruitingComponent', () => {
  let component: JobsRecruitingComponent;
  let fixture: ComponentFixture<JobsRecruitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsRecruitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsRecruitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
