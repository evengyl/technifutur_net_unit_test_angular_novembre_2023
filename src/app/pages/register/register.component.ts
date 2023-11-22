import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterForm } from './register.form'
import { Country } from '../../shared/models/country.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {

  fg! : FormGroup;
  countries! : Country[]
  
  constructor(
    private fb : FormBuilder,
    private activateRoute : ActivatedRoute,
    private userService : UserService,
    private router : Router
  ){
    this._initForm()
    this.countries = this.activateRoute.snapshot.data['countries']
  }


  _initForm(){
    this.fg = this.fb.group(RegisterForm)

    const nationalityControl = this.fg.get('nationality')
    const ssnControl = this.fg.get('ssn')

    if(ssnControl && nationalityControl) {
    
      ssnControl.disable()
    
      nationalityControl.statusChanges.subscribe(() => {
        
        if(nationalityControl.value?.toLowerCase() === 'be')
        {
          ssnControl.enable()
        }
        else
        {
          ssnControl.disable()
        }
      })
    }

  }

  submit(){
   if(this.fg.valid) {
      if(this.userService.post(this.fg.value))
          this.router.navigateByUrl('')
    }
  }
}
