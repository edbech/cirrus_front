import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from  '@angular/forms'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { GameService } from './services/game.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserprofileService } from './Services/userprofile.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    RegistrationComponent,
    NavbarComponent,
    DashboardComponent,
    GameBoardComponent,
    RecoverAccountComponent,
    UserProfileComponent,
    UserListComponent,
    ResetPasswordComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegistrationComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'game',
        component: GameBoardComponent
      },
      {
        path: 'accountrecovery',
        component: RecoverAccountComponent
      },
      { path: 'recover-account', component: RecoverAccountComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'reset-password', component: ResetPasswordComponent }
    ])
  ],
  providers: [
    UserService,
    AuthService,
    GameService,
    UserprofileService,
  
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
