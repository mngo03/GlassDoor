import { Component, OnInit } from '@angular/core';
import { CompanyDetailsService } from '../services/company-details.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  pageName = 'home';
  companies: any;
  constructor(private companyService: CompanyDetailsService) { }

  ngOnInit() {
    this.companyService.getAll().subscribe((data) =>{
      this.companies = data;
    });
  }
}
