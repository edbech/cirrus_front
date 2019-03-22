import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { User } from '../models/users';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

    private userService: UserService
  ) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      aboutMe: ['', Validators.required],
    });
  }
  get f() {
    let userValues = this.registerForm.controls;
    console.log(userValues);
    return userValues;
  }




  register() {


    this.userService.register(this.registerForm.value)
      .pipe(first())
      .subscribe(resp => {
        this.router.navigate(['/login']);
      },
        error => {
          //add validation 
          console.log('Registeration unsuccessful')
        }
      )


  }

}

