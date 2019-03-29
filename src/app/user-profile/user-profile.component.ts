import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Injectable } from '@angular/core';
import { User } from '../models/users';

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

ngOnInit() {
  this.user= JSON.parse(localStorage.getItem('jwt-user'));
  
 
  this.userService.getById(this.user.userId).subscribe(resp=>{
  })

  this.userService.getUser(this.user).subscribe(resp=>{
    this.userInfo=resp;
  })
  }

  updateProfile(){
    this.userService.updated(this.user);

  }
}
