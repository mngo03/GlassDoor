import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  userSetting: FormGroup;
  firstName:string='';
  lastName:string='';
  jobTitle:string='';
  email:string='';
  currrentPassword:string=''  ;
  newPassword:string='';
  ngOnInit() {
    this.userSetting=this.formBuilder.group({
      firstName:[null, Validators.required],
      lastName:[null, Validators.required],
      jobTitle:[null, Validators.required],
      email:[null, Validators.required],
      currrentPassword:[null, Validators.required],
      newPassword:[null, Validators.required],
      
    });
  }

}
