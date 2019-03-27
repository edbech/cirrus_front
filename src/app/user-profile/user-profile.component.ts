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

 private user;
  private username;
  private found;

constructor(private userService: UserService) { }

//1- HTTP get the request from userprofile.service getUser()
//2- Receive the observable and cast into an users array
//3- Subscribe to the observable from users or any compnent need this data from the array 
//4- Assign the local data from the user array to local variable
//*RxJS: Reactive extesions for javascript and external library to work with observables
  
ngOnInit() {
    //  this.userService.getUser().subscribe((data:any[]) => {    
    //         console.log(data);
    //         this.user=data;
    //  }   
    //  )
  }
}
