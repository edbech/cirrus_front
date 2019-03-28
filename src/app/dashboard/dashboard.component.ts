import { FormBuilder, FormGroup } from '@angular/forms';

import { GameService } from './../services/game.service';
import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { User } from './../models/users';
import { Router } from '@angular/router';

import { Game } from '../models/game';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser:User;
  users: User[];
  newGameForm: FormGroup;
  currentGame:Game;
  usernameInvalid:boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private gameService: GameService, 
    private router: Router
    
  ) { }

  ngOnInit() {

    // this.userService.getAll().subscribe((response:any[]) =>{
    //   if(response){
    //    console.log("works")
    //    this.users = response;
    //    console.log(this.users)
    //   }})
    this.currentUser = JSON.parse(localStorage.getItem("jwt-user"));
    //console.log(this.currentUser.userId);
    //console.log(this.currentUser.username);
    //console.log(this.currentUser.password);
      this.newGameForm = this.formBuilder.group({
        player2username: [''],
        
        
    });
  }

  onCreateNewGame() {
    //console.log(this.currentUser.username, 'current user name');
    //console.log(this.newGameForm.value.isPublic, "ispublic" );
    

   let gameIsPublicValue = 1; 
    /*if(this.newGameForm.value.isPublic){
      gameIsPublicValue = 1;
    }else{
      gameIsPublicValue = 0 ;
    }
    
    will retieve new Game view 
    newgame and navigate to new game view 
    pame in progress and spectatei
    If a player in the game allow to make move
    */ 
    this.gameService.createNewGame(this.currentUser.username,this.newGameForm.value.player2username, gameIsPublicValue )
    .subscribe(resp =>{ 
      //console.log(resp);
      localStorage.setItem('game', JSON.stringify(resp));
      this.router.navigate(['game-view']);
      })  
  }

  logout(){
    this.authService.logout();
  }

  getAllGames() {
    //this.gameService.getAllGamesInProgress(); 
    //display all current games in progress for user
  }

 
}
