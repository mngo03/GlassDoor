import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-single-company-details',
  templateUrl: './single-company-details.component.html',
  styleUrls: ['./single-company-details.component.css']
})
export class SingleCompanyDetailsComponent implements OnInit {

  pageName = 'company-details';
  id: string;
  company: any;
  companyForm: FormGroup;

  constructor(private route: ActivatedRoute, private companyService: CompanyDetailsService, private _formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.route.params.subscribe(res => { 
      this.id = res.id;
    });
    this.companyService.getCompanyId(this.id).subscribe(
      data =>  {
        console.log('Data:', data)
        this.company = data;
      },
      err => console.log(err),
      () => {
        console.log(this.company);
        this.companyForm = this._formBuilder.group({
          website: [this.company.website, Validators.required],
          hq_city: [this.company.hqCity, Validators.required],
          year_founded: [this.company.yearFounded, Validators.required],
          type: [this.company.type, Validators.required],
          sector: [this.company.sector, Validators.required],
          industry: [this.company.industry, Validators.required],
          total_employees: [this.company.totalEmployees, Validators.required],
          annual_revenue: [this.company.annualRevenue, Validators.required],
          status: [this.company.status, Validators.required]
        });
      }
    );
  }
}
