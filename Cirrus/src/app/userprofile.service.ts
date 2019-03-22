import { Injectable } from '@angular/core';
import { User } from  './models/users';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private user: User[]) { }
 
  getUser(): obsevable User[] {

    return user;
  }

}
