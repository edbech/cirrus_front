import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoverAccountComponent } from './recover-account/recover-account.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'recover-account', component: RecoverAccountComponent },
  { path: 'user-profile', component: UserProfileComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
