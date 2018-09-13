import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyAwardsComponent } from './single-company-awards.component';

describe('SingleCompanyAwardsComponent', () => {
  let component: SingleCompanyAwardsComponent;
  let fixture: ComponentFixture<SingleCompanyAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompanyAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompanyAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
