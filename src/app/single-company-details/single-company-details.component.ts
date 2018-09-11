import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetailsService } from '../services/company-details.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Location } from '@angular/common';

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
  totalEmployeesOptions = [
    {option_name: '1 to 50 employees'},
    {option_name: '51 to 500 employees'},
    {option_name: '501 to 100 employees'},
    {option_name: '1,001+ employees'}
  ];
  yearFoundedOptions = this.generateYearsFoundedArray();
  comapnyTypeOptions = [
    'Public',
    'Private'
  ];
  sectorOptions = [
    'Technology',
    'Financials',
    'Energy',
    'Healthcare'
  ];
  industryOptions = [
    'Computer',
    'Agriculture',
    'Aerospace',
    'Education'
  ];

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
        var findIndex = function(arr: any, company: any, property: string) {
          var findTotalEmployeesValue = function (element) {
            return element.option_name == company.totalEmployees;
          }
          var findYearFoundedValue = function(element) {
            return element == company.yearFounded;
          }
          var findCompanyTypeValue = function(element) {
            return element == company.type;
          }
          var findSectorValue = function(element) {
            return element == company.sector;
          }
          var findIndustryValue = function(element) {
            return element == company.industry;
          }
          switch(property) {
            case "totalEmployees":
              return arr.findIndex(findTotalEmployeesValue);
            case "yearFounded":
              return arr.findIndex(findYearFoundedValue);
            case "companyType":
              return arr.findIndex(findCompanyTypeValue);
            case 'sector':
              return arr.findIndex(findSectorValue);
            case 'industry':
              return arr.findIndex(findIndustryValue);
          }
        }

        var totalEmployeeIndex = findIndex(this.totalEmployeesOptions, this.company, 'totalEmployees');
        var yearFoundedIndex = findIndex(this.yearFoundedOptions, this.company, 'yearFounded');
        var companyTypeIndex = findIndex(this.comapnyTypeOptions, this.company, 'companyType');
        var sectorIndex = findIndex(this.sectorOptions, this.company, 'sector');
        var industryIndex = findIndex(this.industryOptions, this.company, 'industry');

        this.companyForm = this._formBuilder.group({
          website: [this.company.website, Validators.required],
          hq_city: [this.company.hqCity, Validators.required],
          year_founded: [this.yearFoundedOptions[yearFoundedIndex], Validators.required],
          type: [this.comapnyTypeOptions[companyTypeIndex], Validators.required],
          sector: [this.sectorOptions[sectorIndex], Validators.required],
          industry: [this.industryOptions[industryIndex], Validators.required],
          total_employees: [this.totalEmployeesOptions[totalEmployeeIndex], Validators.required],
          annual_revenue: [this.company.annualRevenue, Validators.required],
          status: [this.company.status, Validators.required]
        });
      }
    );
  }

  generateYearsFoundedArray() {
    var startYear = 1670;
    var endYear = 2018;
    var array = new Array(endYear - startYear);
    for(var i = startYear; i <= endYear; i++) {
      array.push(i);
    }
    return array;
  }

  showSubmitButton() {
    return (this.companyForm.touched);
  }

  onSubmit() {
    var submitData = this.companyForm.value;
    const req = this.companyService.updateCompany(this.id, submitData);
    req.subscribe();
    req.subscribe();
    location.reload();
  }
}
