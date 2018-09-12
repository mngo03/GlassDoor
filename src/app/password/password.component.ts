import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordReset:FormGroup;  
  password:string='';
  newPassword:string='';
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passwordReset=this.formBuilder.group({
      password:[null, Validators.required],
      newPassword:[null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }
  onSubmit(){
    console.log(this.passwordReset.value)
  }
}
