import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  pageName = 'company-details';
  constructor() { }

  ngOnInit() {
  }

}
