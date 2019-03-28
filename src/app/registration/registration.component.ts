import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

    private userService: UserService
  ) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      securityquestion: ['', Validators.required],
      securityanswer: ['', Validators.required],
    });
  }
  get f() {
    let userValues = this.registerForm.controls;
    console.log(userValues);
    return userValues;
  }

  onRegister() {
    console.log(this.registerForm.controls);
    console.log(this.registerForm.value);
    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(resp => {
        this.router.navigate(['/login']);
      },
        error => {
          //add validation 
          console.log('Registration unsuccessful')
        }
      )
  }
}