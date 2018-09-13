import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCompanyUpdatesComponent } from './single-company-updates.component';

describe('SingleCompanyUpdatesComponent', () => {
  let component: SingleCompanyUpdatesComponent;
  let fixture: ComponentFixture<SingleCompanyUpdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCompanyUpdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCompanyUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
