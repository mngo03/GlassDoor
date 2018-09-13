import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-credit-card-info',
  templateUrl: './credit-card-info.component.html',
  styleUrls: ['./credit-card-info.component.css']
})
export class CreditCardInfoComponent implements OnInit {
  creditCard:FormGroup;
  fullName:string='';
  creditNumber:string='';
  expDate:string='';
  cvc:string='';

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.creditCard=this.formBuilder.group({
      fullName:[null, Validators.required],
      creditNumber:[null, Validators.required],
      expDate:[null, Validators.required],
      cvc:[null, Validators.required],
    });

  }
}
