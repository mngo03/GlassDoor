import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyLocationsComponent } from './single-company-locations.component';

describe('SingleCompanyLocationsComponent', () => {
  let component: SingleCompanyLocationsComponent;
  let fixture: ComponentFixture<SingleCompanyLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompanyLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompanyLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
