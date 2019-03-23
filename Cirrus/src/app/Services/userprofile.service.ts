import { Injectable } from '@angular/core';
import { User } from  '../models/users';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  

  
  private  _url: string ='localhost:8080/cirrus-back/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<IUser[]>{

    return this.http.get<IUser[]>(this._url);
  }

}
