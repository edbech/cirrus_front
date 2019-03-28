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
    console.log(userValues);
    return userValues;
  }
  get e() {
    let answerValues = this.answerForm.controls;
    console.log(answerValues);
    return answerValues;
  }

  onRetrieveQuestion() {
    console.log(this.recoveryForm.value)
    
    this.userService.getRecoveryQuestion(this.recoveryForm.value)
      .subscribe((resp : any)=>{
        console.log("check1");
        console.log(resp);
        if(resp){
          this.question = resp.securityquestion;
          this.usernameInvalid = false;
          this.correctUsername = true;
        }
      }
      )
  }

  onAnswerQuestion() {
    console.log("inside onAnswer")
    console.log(this.recoveryForm.value);
    let username = this.recoveryForm.value;
     this.userService.getRecoveryAnswer(username,this.answerForm.value).subscribe(
      (resp : any) =>{
         console.dir(resp);
         if(resp){
          this.user = resp;
          console.log(this.user);
          console.log("Here");
          this.correctAnswer = true;
          // body.username = this.user.username;
          // body.password = this.user.password;
          console.log(this.user.password);
          console.log(this.user.username);
          let body = new Credentials(this.user.username, this.user.password);
          console.log(body);

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
