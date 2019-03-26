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
  currentUser: User;
  gameService: GameService;
  users: User[] = [];
  newgameForm: FormGroup;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    //   this.newGameForm = this.formBuilder.group({
    //     username: [''],
    //     password: [''],
    // })
  }

  onCreateNewGame() {
    // this.gameService()
  }

  getAllGamesForUser() {
    //this.gameService.getAllGamesInProgress(); 
    //display all current games in progress for user
  }

  private getAllUsers() {
    // this.userService.getAll().subscribe(response =>{
    //   this.users = response;
    // })
  }
}
