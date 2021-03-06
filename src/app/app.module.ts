import { LearnToPlayComponent } from './learn-to-play/learn-to-play.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { TableService } from './active-game-list/table.service';
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
import { ActiveGameListComponent } from './active-game-list/active-game-list.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { HighscoresComponent } from './highscores/highscores.component';
import { GameViewComponent } from './game-view/game-view.component';


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
    ActiveGameListComponent,
    UpdateAccountComponent,
    HighscoresComponent,
    GameViewComponent,
    LearnToPlayComponent

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
        path: 'gameBoard',
        component: GameBoardComponent
      },
      {
        path: 'accountrecovery',
        component: RecoverAccountComponent
      },

      {
        path: 'user-profile',
        component: UserProfileComponent
      },
      {
        path: 'active-game-list',
        component: ActiveGameListComponent
      },
      {
        path: 'update-account',
        component: UpdateAccountComponent
      },
      {
        path: 'highscores',
        component: HighscoresComponent
      },
      {
        path: 'game-view',
        component: GameViewComponent
      },
      {
        path: 'learn-to-play',
        component: LearnToPlayComponent
      }
      
    ])
  ],
  providers: [
    UserService,
    AuthService,
    GameService,
    TableService,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
