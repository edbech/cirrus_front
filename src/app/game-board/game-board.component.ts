
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { GameService } from './../services/game.service';
import { Game } from './../models/game';

@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {


private gameArray = Array(9).fill(0)
private currentGame: Game;

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

   board = Array(9).fill("");


  ngOnInit() {
    
  }

  makeAMove($event, index) {
   // get current value of the 
      console.log("inside makeAMove");
      if(!this.checkTurn()){
        //return;
       }
    //get max from array
    let turn = Math.max.apply(Math, this.gameArray.map(o => { return o })) + 1;
    if(turn > 9){
      return;
    }
    console.log(turn, "turn");
    console.log(index); 
    console.dir(this.gameArray);
    console.log(this.gameArray[index]);
    if(this.gameArray[index] == ""){
   // change all instanses of the game state so that it can be used in other fuctions  
    //this.gameService.changeGameState(this.gameArray.splice(index, 1, turn));
    console.log(this.gameArray.splice(index, 1, turn), "game.state.splice");
    console.log(this.gameArray);
   
    this.currentGame = JSON.parse(localStorage.getItem('game'));
    this.currentGame.gamestate = this.gameArray;
    console.log(this.currentGame)
    console.log(localStorage.getItem('game'));
    this.gameService.sendPlayerMove(this.currentGame.gameId, this.currentGame.gamestate).subscribe(resp=>{
      if(resp){
        this.renderGame(this.gameArray);
        //remove old game object is resp successfull and add new game state to local storage
        localStorage.removeItem('game');
        localStorage.setItem('game', JSON.stringify(this.currentGame ))
         //this.router.navigate(['/dashboard']);
      }
      //have notification that move was not sent successfully

    })
     
    }
  }

  refreshBoard() {
    // this.gameService.getBoard()
  }
 
  //Check turn
  checkTurn() { // returns boolian, true if it is the current user's turn
    //this.gameArray
    let turn = Math.max.apply(Math, this.gameArray.map(o => { return o })) + 1;
    console.log(turn, "turn");
    if(turn%2 == 0){
      return false;
    }
    return true;
    
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
  renderGame(gameState) {

    console.log(gameState.length,"in renderGame");
    console.log(this.board);
    //get specific game from ID
    for(let i = 0; i < gameState.length; i++) { 
      //console.log("inside For") 
      if(gameState[i] == 0){
        //console.log("0")
        this.board[i] = ""
        //console.log(this.board)
      } else if (gameState[i] % 2 == 0){
        //console.log("even");
        this.board[i] = "O"
        //console.log(this.board)
      } else {
        //console.log("odd");
        this.board[i]= "X"
        //console.log(this.board)
      }
    }
   

  }
}
