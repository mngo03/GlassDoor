import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-company-benefits',
  templateUrl: './single-company-benefits.component.html',
  styleUrls: ['./single-company-benefits.component.css']
})
export class SingleCompanyBenefitsComponent implements OnInit {

  pageName = 'company-details';
  id: string;
  company: any;
  form: FormGroup;
  selected_benefit_index: string;
  country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
	,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
	,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
	,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
	,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
	,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
	,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
	,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
	,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
	,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
	,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
	,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
	,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
	,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
  ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];  
  
  benefits_list = [
    {title: "Health Insurance", description: "Add a Description", country: "", id: 1},
    {title: "Dental Insurance", description: "Add a Description", country: "", id: 2},
    {title: "Flexible Spending Account", description: "Add a Description", country: "", id: 3},
    {title: "Vision Insurance", description: "Add a Description", country: "", id: 4},
    {title: "Health Savings Account (HSA)", description: "Add a Description", country: "", id: 5},
    {title: "Life Insurance", description: "Add a Description", country: "", id: 6},
    {title: "Supplemental Life Insurance", description: "Add a Description", country: "", id: 7},
    {title: "Disability Insurance", description: "Add a Description", country: "", id: 8},
    {title: "Occupational Accident Insurance", description: "Add a Description", country: "", id: 9},
    {title: "Health Care On-Site", description: "Add a Description", country: "", id: 10},
  ];

  constructor(private route: ActivatedRoute, private companyService: CompanyDetailsService, private _formBuilder: FormBuilder, private location: Location) { }


  ngOnInit() {
    const controls = this.benefits_list.map(c => new FormControl(false));

    this.form = this._formBuilder.group({
      benefits_list: new FormArray(controls),
      countries: [this.country_list[198]]
    });
  }

  onSubmit() {

    const selectedBenefitsIds = this.form.value.benefits_list
    .map((v, i) => v ? this.benefits_list[i].id : null)
    .filter(v => v !== null);

    console.log(selectedBenefitsIds);
  }

  saveEditedDescription() {
    console.log('Saving edits for ' + this.benefits_list[this.selected_benefit_index].title);
    this.benefits_list[this.selected_benefit_index].description = (<HTMLInputElement>document.getElementById("input-benefit-description")).value;
    (<HTMLInputElement>document.getElementById("input-benefit-description")).value = "";
  }

  triggerEdit(index: string) {
    this.selected_benefit_index = index;
    console.log('Editing: ' + this.benefits_list[this.selected_benefit_index].title)
    return false;
  }
}
