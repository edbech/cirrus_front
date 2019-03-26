import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { UserService } from './../services/user.service';

@Component({
  selector: 'app-recover-account',
  templateUrl: './recover-account.component.html',
  styleUrls: ['./recover-account.component.css']
})
export class RecoverAccountComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

    private userService: UserService

  ) { }

  ngOnInit() {

    //work on this
    this.registerForm = new FormGroup({

      username: new FormControl()
    });

  }

  get f(){
    let userValues = this.registerForm.controls;
    console.log(userValues);
    return userValues;
  }

  retrieveQuestion(username){

    
   /*
    this.userService.getQuesetion 

   */
  }

}
