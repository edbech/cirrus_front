import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { User } from '../models/users';
//import { NgModule } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

 private user:User;
 private userInfo;
 private found;


constructor(private userService: UserService) { }

//1- HTTP get the request from userprofile.service getUser()
//2- Receive the observable and cast into an users array
//3- Subscribe to the observable from users or any compnent need this data from the array 
//4- Assign the local data from the user array to local variable
//*RxJS: Reactive extesions for javascript and external library to work with observables
/*
Object { userId: 15, username: "Fadi", password: "Alzoubi", email: "fa@gmail.com", aboutMe: "I am a Jedi, like my father before me, and his father before him, a thousand generations to the founding of the jedi order!", avatar: null, score: 300, retired: 0, securityquestion: "What is the speed of an unladen Sparrow?", securityanswer: "42" }
user-profile.component.ts:39:4
15

*/

ngOnInit() {
  this.user= JSON.parse(localStorage.getItem('jwt-user'));
  
  console.log('this ***********'+this.user.userId);
  console.log(typeof(this.user.userId));

  this.userService.getById(this.user.userId).subscribe(resp=>{
    console.log(resp)
  })

  this.userService.getUser(this.user).subscribe(resp=>{
    console.log(resp)
    this.userInfo=resp;
    console.log(this.userInfo.userId)
  })
  }

  updateProfile(){
    this.userService.updated(this.user);

  }
}
