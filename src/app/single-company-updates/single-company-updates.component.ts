import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-company-updates',
  templateUrl: './single-company-updates.component.html',
  styleUrls: ['./single-company-updates.component.css']
})
export class SingleCompanyUpdatesComponent implements OnInit {

  pageName = 'company-details';
  id: string;
  company: any;
  companyForm: FormGroup;
  updates: any;

  constructor(private route: ActivatedRoute, private companyService: CompanyDetailsService, private _formBuilder: FormBuilder, private location: Location) { }

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
        this.companyForm = this._formBuilder.group({
          description: [null, Validators.required],
          media: [null, Validators.required]
        });
        this.updates = this.company.company_updates;
      }
    );
  }
}
