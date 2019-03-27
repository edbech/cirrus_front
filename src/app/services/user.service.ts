import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

import { User } from '../models/users';
import { environment as env } from '../../environments/environment';

@Injectable()
export class UserService {

  currentUser: User;

  headers = new HttpHeaders({'Content-Type': 'application/json'});

  options = {
    headers: this.headers
    
  };
  constructor(
    private http: HttpClient
  ) { }

  register(user: User) {
    return this.http.post(env.API_URL + `/users/`, user)
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
  
  getRecoveryAnswer(usern,answer){
    let body = {
      username:usern,
      securityanswer:answer
    }
    
    return this.http.post(env.API_URL +'users/recoveryanswer/', body);
    //password
  }
 
  updated(user:User){
    return this.http.put(env.API_URL + `/users/${user.id}`,user);
  }

  getUser(user:User){
    return this.http.get<User[]>(env.API_URL + `/users/${user.id}`);
  }
}