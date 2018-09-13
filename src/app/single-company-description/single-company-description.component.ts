import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-company-description',
  templateUrl: './single-company-description.component.html',
  styleUrls: ['./single-company-description.component.css']
})
export class SingleCompanyDescriptionComponent implements OnInit {

  pageName = 'company-details';
  id: string;
  company: any;
  companyForm: FormGroup;

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
          description: [this.company.description, Validators.required],
          mission: [this.company.mission, Validators.required]
        });
        (<HTMLInputElement>document.getElementById("input-company-description")).value = this.company.mission;
      }
    );
  }

  onSubmit() {
    var submitData = this.companyForm.value;
    submitData['mission'] = (<HTMLInputElement>document.getElementById("input-company-mission")).value;
    submitData['description'] = (<HTMLInputElement>document.getElementById("input-company-description")).value;

    const req = this.companyService.updateCompany(this.id, submitData);
    req.subscribe();
    req.subscribe();

    location.reload();
  }

  getNumberCharacters(id: string) {
    const numberChar = (<HTMLInputElement>document.getElementById(id)).value.length;
    return numberChar + " out of 1000";
  }

  showSubmitButton() {
    return (<HTMLInputElement>document.getElementById("input-company-description")).value != this.company.description || (<HTMLInputElement>document.getElementById("input-company-mission")).value != this.company.mission;
  }

}
