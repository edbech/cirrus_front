import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../Services/userprofile.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
public users =[];
//localhost:8080/cirrus-back/
  constructor(private _userprofileService: UserprofileService) { }

//1- HTTP get the request from userprofile.service
//2- Receive the observable and cast into an user array
//3- Subscribe to the observable from users or any compnent need this data from the array 
//4- Assign the local data from the user array to local variable
//*RxJS: Reactive extesions for javascript and external library to work with observables
  
ngOnInit() {
    this._userprofileService.getUser()
      .subscribe(data=> this.users=data);
  }

  // getUser(): void {
  //   this.userprofile.service.getUserProfile()
  //       .subscribe(users => this.users = users);
  // }

  // this.http.get(env.API_URL + 'users/', usersJson, { observe: 'response' })
 
 
  // updateUser(): void {
  //   this.userService.getUserProfile()
  //       .subscribe(users => this.users = users);
  // }
  // let usersJson = JSON.stringify(credentials);

  // this.http.post(env.API_URL + 'users', usersJson, { observe: 'response' })

 
}
