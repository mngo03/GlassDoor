import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  pageName = 'company-details';
  @Output() navbarEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.fireNavbarEvent();
  }

  fireNavbarEvent() {
    this.navbarEvent.emit('company-details');
    console.log('fired event');
  }

}
