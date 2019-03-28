import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/users';
import { environment as env } from '../../environments/environment';
import { Credentials } from '../models/credentials';

@Injectable()
export class AuthService {


  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private readonly _isAuth = new BehaviorSubject(this.hasToken());
  readonly isAuth$ = this._isAuth.asObservable();

  constructor(
    private http: HttpClient,
    private route: Router
  ) {

  }


  get isAuth() {
    return this._isAuth.getValue();
  }

  set isAuth(value: boolean) {
    this._isAuth.next(value);
  }
  
 async login(credentials: Credentials) {
      console.log(credentials);
      console.log(typeof(credentials));
      let credentialsJson = JSON.stringify(credentials);
      let response = await fetch(env.API_URL+ '/users/auth', {
          method: 'POST',
          mode: 'cors',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
      })
      if (response.status == 200 || response.status == 201 || response.status == 101 ) {
        this.isAuth = true;
        console.log(this.isAuth);
        let responseBody = await response.json();
        console.log(responseBody);
        
        localStorage.setItem('jwt', response.headers.get('Authorization'));
        localStorage.setItem('jwt-user', JSON.stringify(responseBody));
    } else {
      this.isAuth = false;
    }    
         this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('jwt-user')));
         console.dir(this.currentUserSubject.next)
         console.dir(this.currentUserSubject)
         this.currentUser = this.currentUserSubject.asObservable();
         console.dir(credentialsJson,localStorage.getItem('jwt'),localStorage.getItem('jwt-user') )
         console.dir(this.currentUser);
  }

  logout() {
    if(localStorage.getItem('jwt-user') || localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt');
      localStorage.removeItem('jwt-user');
      localStorage.removeItem('rbs-user');
      this.route.navigate(['/login']);
    }
    this.isAuth = false;
    this.route.navigate(['']);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('jwt');
  }
}
