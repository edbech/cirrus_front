import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/users';
import { environment as env } from '../../environments/environment';
import { Credentials } from '../models/credentials';




@Injectable()
export class AuthService {

  private options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private readonly _isAuth = new BehaviorSubject(this.hasToken());
  readonly isAuth$ = this._isAuth.asObservable();

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('rbs-user')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  //get current user
  public get currentUserValue():User{
    return this.currentUserSubject.value;
  }

  get isAuth() {
    return this._isAuth.getValue();
  }

  set isAuth(value: boolean) {
    this._isAuth.next(value);
  }


  
//this.options.headers
  login(credentials: Credentials) {

    let credentialsJson = JSON.stringify(credentials);
    console.log(credentialsJson);
    let x = this.http.post(env.API_URL + '/users/auth', credentialsJson, this.options );
    console.log(x);
    
      x.pipe(map(resp => {
        console.log(typeof(resp));
        //localStorage.setItem('rbs-jwt', this.headers.get('Authorization'));
        localStorage.setItem('rbs-user', JSON.stringify(resp));
        this.isAuth = true;
        console.log(this.isAuth)
        console.log(localStorage.getItem('rbs-user'));
        console.log(localStorage.getItem('rbs-jwt'));
       
         })).subscribe();
         console.log(credentialsJson,localStorage.getItem('rbs-jwt'),localStorage.getItem('rbs-user') )
     
  }

  logout() {
    if(localStorage.getItem('rbs-user') || localStorage.getItem('rbs-jwt')) {
      localStorage.removeItem('rbs-jwt');
      localStorage.removeItem('rbs-user');
    }
    this.isAuth = false;
  }

  hasToken(): boolean {
    return !!localStorage.getItem('rbs-jwt');
  }

  

}
