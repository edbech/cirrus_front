import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserprofileService } from './Services/userprofile.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';


const ROUTES = [
  { path: '', component: AppComponent },
  { path: 'recover-account', component: RecoverAccountComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
];

@NgModule({
  declarations: [
    //HttpClientModule,
    AppComponent,
    RecoverAccountComponent,
    UserProfileComponent,
    UserListComponent,
    ResetPasswordComponent
  ],

  imports: [
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    HttpClient,
    FormsModule 
  ],

  providers: [
    UserprofileService

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
