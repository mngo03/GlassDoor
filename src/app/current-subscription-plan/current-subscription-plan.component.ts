import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-current-subscription-plan',
  templateUrl: './current-subscription-plan.component.html',
  styleUrls: ['./current-subscription-plan.component.css']
})
export class CurrentSubscriptionPlanComponent implements OnInit {
  pageName='subscribe';
  activePage = "subscribe";
  
  constructor() { }
  
  ngOnInit() {
  }
  onActivate(component) {
    console.log(component.pageName);
    console.log(component.id);
    this.activePage = component.pageName;
  }
}
