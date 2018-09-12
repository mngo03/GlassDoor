import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyBenefitsComponent } from './single-company-benefits.component';

describe('SingleCompanyBenefitsComponent', () => {
  let component: SingleCompanyBenefitsComponent;
  let fixture: ComponentFixture<SingleCompanyBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompanyBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompanyBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
