import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import { User } from '../models/users';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  updateForm: FormGroup;
  submitted = false;
  user:User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

    private userService: UserService
  ) { }

  ngOnInit() {
    this.updateForm = this.formBuilder.group({

      securityanswer: ['', Validators.required],
      securityquestion: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      aboutMe: ['', Validators.required]

    });
  }
  get x() {
    let updateValues = this.updateForm.controls;
    console.log(updateValues);
    return updateValues;
  }

  onUpdate() {
    this.user = JSON.parse(localStorage.getItem('jwt-user'));
    console.log(JSON.parse(localStorage.getItem('jwt-user')));

    console.log(this.user, "Before");
    
    this.user.password = this.updateForm.controls.password.value
    this.user.securityanswer = this.updateForm.controls.securityanswer.value
    this.user.securityquestion= this.updateForm.controls.securityquestion.value
    this.user.aboutMe = this.updateForm.controls.aboutMe.value
    console.log(this.user, "After");

    this.userService.updated(this.user)
      .subscribe(resp=> {
        if(resp) this.router.navigate(['/dashboard']);
      },
        error => {
          //validate
          console.log('🛑 could not update, sorry 🛑')
        })
  }
}