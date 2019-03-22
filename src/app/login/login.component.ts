import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Credentials } from '../models/credentials';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    credentialsInvalid: boolean = false;
    credentials: Credentials;
    isAuth$ = this.authService.isAuth$;

    constructor(
        private router: Router,

        private authService: AuthService) {
        // redirect to home if already logged in
        
    };

    login(username: string, password: string): void {

        this.credentials = new Credentials(username, password);
        this.authService.login(this.credentials);
        this.isAuth$.subscribe(isAuth => {
            if (isAuth) {

                this.credentialsInvalid = false;
                this.router.navigate(['dashboard']);
            }
        }, error => {
            this.credentialsInvalid = true;

        });



    }

}
