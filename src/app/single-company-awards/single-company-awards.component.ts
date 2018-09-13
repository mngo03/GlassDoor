import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-single-company-awards',
  templateUrl: './single-company-awards.component.html',
  styleUrls: ['./single-company-awards.component.css']
})
export class SingleCompanyAwardsComponent implements OnInit {

  pageName = 'company-details';
  id: string;
  company: any;
  companyForm: FormGroup;
  years_list: any[];
  awards: any[];

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

        this.years_list = this.generateYearsFoundedArray();
        this.awards = this.company.company_awards;
        this.companyForm = this._formBuilder.group({
          name: [null, Validators.required],
          source: [null, Validators.required],
          website: [null, Validators.required],
          year: [this.years_list[348], Validators.required]
        });
      }
    );
  }

  generateYearsFoundedArray() {
    var startYear = 1670;
    var endYear = 2018;
    var array: any[] = [];
    for(var i = startYear; i <= endYear; i++) {
      array.push(i);
    }
    return array;
  }

  onSubmit() {
    console.log(this.companyForm.value);
    var id: any;
    var award: any;
    var company_awards = {
      "company_awards": []
    };
    const req = this.companyService.postAward(this.companyForm.value);
    req.subscribe(data => {
      console.log(data);
      award = data;
      id = award._id;
    },
    err => console.log(err),
    () => {
      console.log(this.awards);
      this.awards.forEach(element => {
        company_awards.company_awards.push(element._id);
      });
      company_awards.company_awards.push(id);
      const update_req = this.companyService.updateAward(this.company._id, company_awards);
      update_req.subscribe();
      update_req.subscribe();
      this.awards = company_awards.company_awards;
    });
    location.reload();
  }

  clearForm() {
    (<HTMLInputElement>document.getElementById("input-award-name")).value= "";
    (<HTMLInputElement>document.getElementById("input-award-source")).value= "";
    (<HTMLInputElement>document.getElementById("input-award-website")).value= "";
  }

  removeAward(id: string) {
    var index = this.findAwardID(id);
    var company_awards = {
      "company_awards": []
    };
    if (index > -1) {
      this.awards.splice(index, 1);
    }
    this.awards.forEach(element => {
      company_awards.company_awards.push(element._id);
    });
    const update_req = this.companyService.updateAward(this.company._id, company_awards);
    update_req.subscribe();
    update_req.subscribe();
    this.awards = company_awards.company_awards;
    location.reload();
  }

  findAwardID(id: string) {
    for(var i = 0; i < this.awards.length; i++) {
      if (this.awards[i]._id == id) return i;
    }
    return -1;
  }
}
