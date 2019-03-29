import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  

 
  private  API_URL: string ='http://project2cirrus-env-2.diziubrss3.us-east-2.elasticbeanstalk.com/users/';

  constructor(private http: HttpClient) { }

  getUser(): Observable<IUser>{

    return this.http.get<IUser>(this.API_URL);
  }

}

