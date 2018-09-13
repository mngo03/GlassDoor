import { Component, OnInit, Input, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
  
})
export class BasicInfoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  

  pageName='account-info';
  infoForm:FormGroup;
  firstName:string='';
  lastName:string='';
  jobTitle:string='';
  gender:string='';
  birthYear:number;
  highestEducation:string='';
  ngOnInit() {
    this.infoForm=this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName:[null, Validators.required],
      jobTitle:[null, Validators.required],
      gender:[null,Validators.required],
      birthYear:[null, Validators.required],
      highestEducation:[null, Validators.required],
    });
  }

}
