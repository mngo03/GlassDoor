import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyDetailsComponent } from './single-company-details.component';

describe('SingleCompanyDetailsComponent', () => {
  let component: SingleCompanyDetailsComponent;
  let fixture: ComponentFixture<SingleCompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompanyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
