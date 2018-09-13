import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlottedJobsComponent } from './slotted-jobs.component';

describe('SlottedJobsComponent', () => {
  let component: SlottedJobsComponent;
  let fixture: ComponentFixture<SlottedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlottedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlottedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
