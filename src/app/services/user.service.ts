import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/users';
import { environment as env } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user:User){

    let userJson = JSON.stringify(user);
    return this.http.post(env.API_URL+ 'user/register', userJson)
     
  }

}
