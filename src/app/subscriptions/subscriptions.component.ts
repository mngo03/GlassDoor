import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
pageName='new-subscriptions';
availPlans:FormGroup;
twoSlot:string='';
threeSlot:string='';
fiveSlot:string='';
  ngOnInit() {
    this.availPlans=this.formBuilder.group({ 
      
       });
  }

}
