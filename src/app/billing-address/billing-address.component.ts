import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.css']
})
export class BillingAddressComponent implements OnInit {
 
  billingForm:FormGroup;  
  address:string='';
  country:string='';
  state:string='';
  city:string=''

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.billingForm=this.formBuilder.group({
      address:[null, Validators.required],
      country:[null, Validators.required],
      state:[null, Validators.required],
      city:[null, Validators.required],
      zip:[null,[Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
    });
  }

}
