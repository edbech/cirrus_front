import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from './../services/user.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

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
        // console.log(resp);
        // if(resp){
        //   this.usernameInvalid = false;
        //   this.correctUsername = true;
        // }
      }
      )
  }

  onAnswerQuestion() {
    let username = this.recoveryForm.value;
     this.userService.getRecoveryAnswer(username,this.answerForm.value).subscribe(
       resp =>{
         if(resp){
           this.correctAnswer = true;
         }
         else{
         }
       }
     )
    // console.log(this.answerForm.controls)
    // console.dir(typeof(this.answerForm.controls))
  }

}
