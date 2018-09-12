import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-company-locations',
  templateUrl: './single-company-locations.component.html',
  styleUrls: ['./single-company-locations.component.css']
})
export class SingleCompanyLocationsComponent implements OnInit {

  pageName = 'company-details';
  id: string;
  company: any;
  companyForm: FormGroup;
  locations: any;
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
          name: [null, Validators.required],
          address: [null, Validators.required],
          city: [null, Validators.required],
          zip_code: [null, Validators.required]
        });
        this.locations = this.company.company_locations;
      }
    );
  }

  updateCompanyLocation(data: JSON) {
    var id: any;
    var location: any;
    const req = this.companyService.postLocation(data);
    req.subscribe(data => {
      console.log(data);
      location = data;
      id = location._id;
    },
    err => console.log(err),
    () => {
      var company_locations = {
        "company_locations": []
      };
      console.log(company_locations);
      this.company.company_locations.forEach(element => {
        company_locations.company_locations.push(element._id);
      });
      company_locations.company_locations.push(id);
      const update_req = this.companyService.updateLocation(this.company._id, company_locations);
      update_req.subscribe();
      update_req.subscribe();
    });
  }

  onSubmit() {
    var submitData = this.companyForm.value;
    this.updateCompanyLocation(submitData);

    location.reload();
  }

  showSubmitButton(){
    return (this.companyForm.controls['name'].touched && this.companyForm.controls['name'].valid) || (this.companyForm.controls['address'].touched && this.companyForm.controls['address'].valid) || (this.companyForm.controls['city'].touched && this.companyForm.controls['city'].valid) || (this.companyForm.controls['zip_code'].touched && this.companyForm.controls['zip_code'].valid);
  }
}
