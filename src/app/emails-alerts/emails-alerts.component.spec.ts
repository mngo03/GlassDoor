import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsAlertsComponent } from './emails-alerts.component';

describe('EmailsAlertsComponent', () => {
  let component: EmailsAlertsComponent;
  let fixture: ComponentFixture<EmailsAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailsAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
