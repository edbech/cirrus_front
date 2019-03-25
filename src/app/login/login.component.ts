import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Credentials } from '../models/credentials';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    credentialsInvalid: boolean;
    credentials: Credentials;
    isAuth$ = this.authService.isAuth$;
    loginForm: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authService: AuthService) {};

    ngOnInit(){
        this.loginForm = this.formBuilder.group({
        username: [''],
        password: [''],
        })}
      
    
    get f(){
        return this.loginForm.controls;
    };

    onLogin(){
        console.log(this.loginForm.value);
        this.authService.login(this.loginForm.value);
        this.isAuth$.subscribe(isAuth => {
            console.log(isAuth);
            if (isAuth) {
                this.credentialsInvalid = false;
                this.router.navigate(['/dashboard']);
                
            }else {
                this.credentialsInvalid = true;
            }
        });



    }

}
