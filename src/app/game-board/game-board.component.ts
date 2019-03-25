
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { GameService } from './../services/game.service';
import { User } from './../models/users';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  //board initilization
  //private gameArray : Array<number>[9];
  gameArray: number[];
  // "012384567"
  //access ? public= 0 : private =1

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  private board = Array(9).fill("X");


  ngOnInit() {

  }

  makeAMove($event, index) {
   // get current value of the 
      console.dir(this.gameService.gameStateCurrent.subscribe(gameState=>this.gameArray = gameState), "behaviorSubject object")
      let x = this.gameService.gameStateCurrent.subscribe(gameState =>{
       this.gameArray = gameState;
       console.dir(gameState, "gameState");
       console.log(typeof(gameState), "typeof gameState");
       console.dir(this.gameArray, "this.gameArray");
    })
    //
    
      console.log(x);
    let turn = Math.max.apply(Math, this.gameArray.map(o => { return o })) + 1;
    console.dir(turn, "turn");
   // change all instanses of the game state so that it can be used in oter fuctions  
    this.gameService.changeGameState(this.gameArray.splice(index, 1, turn));

    this.gameService.sendPlayerMove(this.gameArray)
  }


  refreshBoard() {
    // this.gameService.getBoard()
    // 
    // 
  }

  //Start Newgame
  newGame() {
    //
    //this.gameService.createNewGame
    // 
    //   
    // 
  }

  //Check turn
  checkTurn() { // returns boolian, true if it is the current user's turn
    //this.gameArray
    /*find max value of gameArray 
    if even X, else O
    check if user matches if user is player X
    return true if X 
    else return false O's turn 
    
    if(userIsX && max % 2 == 0) {can play/return true}
    if(!userIsX && max % 2 == 1) {can play/return true}
    can't play return false
    
    */
  }
  //RenderPlayedGame
  renderGame() {
    //console.log(this.gameArray);
    /*
    get specific game from ID
    for(let i = 0; i < gameArray.legth; i++) {   
      if(gameState == 0){
        this.board[i] = ""
      } else if ( gameState[i] % 2 == 0){
        this.board[i] = "O"
      } else {
        this.board[i]= "X"
      }
    }
   */

  }
}
