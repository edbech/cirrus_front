import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GameService } from './../services/game.service';
import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';

import { Component, OnInit } from '@angular/core';
import { User } from './../models/users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser:User
  users: User[];
  newGameForm: FormGroup;
  usernameInvalid:boolean;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private gameService: GameService
    
  ) { }

  ngOnInit() {

    this.userService.getAll().subscribe((response:any[]) =>{
      if(response){
       console.log("works")
       this.users = response;
       console.log(this.users)
      }})
    this.currentUser = JSON.parse( localStorage.getItem("jwt-user"));
    console.log(this.currentUser.userId);
    console.log(this.currentUser.username);
    console.log(this.currentUser.password);
      this.newGameForm = this.formBuilder.group({
        player2username: [''],
       isPublic: ['']
    });
  }

  onCreateNewGame() {
    console.log(this.currentUser.username, 'current user name');
    console.log(this.newGameForm.value.isPublic, "ispublic" );
    
  let player2Id = this.users.find(u => u.username === this.newGameForm.value.player2username);
  let gameIsPublicValue = 0; 
    if(this.newGameForm.value.isPublic){
      gameIsPublicValue = 1;
    }else{
      gameIsPublicValue = 0 ;
    }
    /*
    will retieve new Game view 
    newgame and navigate to new game view 
    pame in progress and spectatei
    If a player in the game allow to make move
    */
    this.gameService.createNewGame(this.currentUser.username,this.newGameForm.value.player2username, gameIsPublicValue )
    //.subscribe(resp =>{   
    
  }

  logout(){
    this.authService.logout();
  }

  getAllGamesForUser() {
    //this.gameService.getAllGamesInProgress(); 
    //display all current games in progress for user
  }

  //  getAllUsers() {
  //    this.userService.getAll().subscribe((response:any[]) =>{
  //     if(response){
  //      console.log("works")
  //      this.users = response;
        
  //     }
      
  //   })
    
  // }
}
