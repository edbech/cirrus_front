import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const ROUTES = [
  { path: 'recover-account', component: RecoverAccountComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-profile', component: UserProfileComponent }
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
    RouterModule.forRoot(ROUTES),
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
