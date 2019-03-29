import { Credentials } from './../models/credentials';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from './../services/user.service';
import { User } from '../models/users';


@Component({
  selector: 'app-recover-account',
  templateUrl: './recover-account.component.html',
  styleUrls: ['./recover-account.component.css']
})
export class RecoverAccountComponent implements OnInit {
  recoveryForm: FormGroup;
  submitted = false;
  question = "";
  password ="";
  answerForm: FormGroup;
  submittedA = false;
  usernameInvalid:boolean;
  correctUsername = false;
  correctAnswer = false;
  user:User;
  creds:Credentials;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService

  ) { }

  ngOnInit() {

    this.recoveryForm = this.formBuilder.group({
      username: ['', Validators.required],
    });

    this.answerForm = this.formBuilder.group({
      securityanswer: ['', Validators.required],
    });
  }


  get f() {
    let userValues = this.recoveryForm.controls;
    return userValues;
  }
  get e() {
    let answerValues = this.answerForm.controls;
    return answerValues;
  }

  onRetrieveQuestion() {
    
    this.userService.getRecoveryQuestion(this.recoveryForm.value)
      .subscribe((resp : any)=>{
        if(resp){
          this.question = resp.securityquestion;
          this.usernameInvalid = false;
          this.correctUsername = true;
        }
      }
      )
  }

  onAnswerQuestion() {
    let username = this.recoveryForm.value;
     this.userService.getRecoveryAnswer(username,this.answerForm.value).subscribe(
      (resp : any) =>{
         if(resp){
          this.user = resp;

          this.correctAnswer = true;
          let body = new Credentials(this.user.username, this.user.password);

          //{"username":"Gabe3","password":"Zapato"} 
          this.authService.login(body);
          this.router.navigate(['/dashboard']);
          
         }
         else{
         }
       }
     )
    console.log(this.answerForm.controls)
  }

}