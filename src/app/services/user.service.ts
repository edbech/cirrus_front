import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { User } from '../models/users';
import { environment as env } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = {
    headers: this.headers
  };
  constructor(
    private http: HttpClient
    
  ) { }

  register(user: User) {
    return this.http.post(env.API_URL + `/users/`, user);
  }

  getAll(){
      return this.http.get<User[]>(env.API_URL+ '/users');
  }

  getById(id:number){
    return this.http.get(env.API_URL + `/user/${id}`);
  }
  getRecoveryQuestion(username){
    return this.http.post(env.API_URL +'users/recoveryquestion/',username);
    //return question
  }
  getRecoveryAnswer(username,securityanswer){
   let body:User = new User;
   
   body.username = username.username;
   body.securityanswer = securityanswer.securityanswer;    
    return this.http.post(env.API_URL +'users/recoveryanswer/', body);
  
  }
  

  updated(user:User){
    return this.http.put(env.API_URL + `/user/${user.userId}`,user);
  }

}