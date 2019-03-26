import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserprofileService } from './Services/userprofile.service';
//import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
//import { TokenInterceptor}  from './Services/interceptor.module';

const ROUTES = [
  { path: '', component: AppComponent },
  { path: 'recover-account', component: RecoverAccountComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RecoverAccountComponent,
    UserProfileComponent,
    UserListComponent,
    ResetPasswordComponent
  ],

  imports: [
    //TokenInterceptor
    RouterModule.forRoot(ROUTES),
    BrowserModule,
   // HttpClient,
    HttpClientModule,
    FormsModule
    
  ],

  providers: [
    UserprofileService

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
