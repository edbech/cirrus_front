import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

//localhost:8080/cirrus-back/
  constructor() { }

  getUser(): void {
    this.userService.getUserProfile()
        .subscribe(users => this.users = users);
  }

  this.http.get(env.API_URL + 'users/', usersJson, { observe: 'response' })
 
 
  // updateUser(): void {
  //   this.userService.getUserProfile()
  //       .subscribe(users => this.users = users);
  // }
  // let usersJson = JSON.stringify(credentials);

  // this.http.post(env.API_URL + 'users', usersJson, { observe: 'response' })

  // ngOnInit() {
  // }

}
