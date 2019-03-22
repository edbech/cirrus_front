import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get isAuth() {
    return this._isAuth.getValue();
  }

  set isAuth(value: boolean) {
    this._isAuth.next(value);
  }


  login(credentials: Credentials) {

    //username: string, password: string
    let credentialsJson = JSON.stringify(credentials);

    this.http.post(env.API_URL + 'auth', credentialsJson, { observe: 'response' })
      .pipe(map(resp => {
        localStorage.setItem('rbs-jwt', resp.headers.get('Authorization'));
        localStorage.setItem('rbs-user', JSON.stringify(resp.body));
        this.isAuth = true;
      })).subscribe();

  }

  logout() {
    localStorage.removeItem('rbs-jwt');
    localStorage.removeItem('rbs-user');
    this.currentUser = null;

  }

  private hasToken(): boolean {
    return !!localStorage.getItem('rbs-jwt');

  }


}
