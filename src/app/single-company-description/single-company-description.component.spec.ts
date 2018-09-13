import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyDescriptionComponent } from './single-company-description.component';

describe('SingleCompanyDescriptionComponent', () => {
  let component: SingleCompanyDescriptionComponent;
  let fixture: ComponentFixture<SingleCompanyDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompanyDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompanyDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
