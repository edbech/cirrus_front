
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from './../models/users';
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
private currentUser:User;

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

   board = Array(9).fill("");


  ngOnInit() {
    console.log("gamebordinit");
    this.currentUser = JSON.parse(localStorage.getItem("jwt-user"));
    this.currentGame = JSON.parse(localStorage.getItem('game'));
    console.log(this.currentGame.gamestate);
    this.renderGame();
  }

  makeAMove($event, index) { 
    console.log("inside makeAMove");
    let split = this.currentGame.gamestate.split('');
    console.log(split);
    let turn = Math.max.apply(Math, split) + 1;
    let currentUser = this.currentUser.username;
    if(turn > 9){
      return;
    }
    if(turn%2 == 0){
      if(currentUser != this.currentGame.playerX){
        //return;
      }
    } else {
      if(currentUser != this.currentGame.playerO){
        //return;
      }
    }
    if(this.board[index] == ""){
      split[index] = turn;
      this.currentGame.gamestate = split.join('');
      console.log(this.currentGame.gamestate);
      this.gameService.sendPlayerMove(this.currentGame.gameId, this.currentGame.gamestate).subscribe(resp=>{
        if(resp){
          console.log(resp);
          this.renderGame();
          //remove old game object is resp successfull and add new game state to local storage
          //localStorage.removeItem('game');
          //localStorage.setItem('game', JSON.stringify(this.currentGame ))
           //this.router.navigate(['/dashboard']);
        }
        //have notification that move was not sent successfully
  
      });
    }


    /*
   // get current value of the 
      
      
    //get max from array
    
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
     
    }*/
  }

  //RenderPlayedGame
  renderGame() {
    let gameState = this.currentGame.gamestate.split('');
    //get specific game from ID
    for(let i = 0; i < gameState.length; i++) {
      
      //console.log("inside For") 
      if(Number(gameState[i]) == 0){
        //console.log("0")
        this.board[i] = "";
        //console.log(this.board)
      } else if (Number(gameState[i]) % 2 == 0){
        //console.log("even");
        this.board[i] = "O";
        //console.log(this.board)
      } else {
        //console.log("odd");
        this.board[i]= "X";
        //console.log(this.board)
      }
    }
   

  }
}
