
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

private currentGame: Game;
private currentUser:User;
private isCute: boolean = false;
  constructor(
    private gameService: GameService,
    private router: Router
  ) { }
   board = Array(9).fill("");
   img = Array(9).fill("");
   moveNumber = 9;


  ngOnInit() {
    console.log("gamebordinit");
    this.currentUser = JSON.parse(localStorage.getItem("jwt-user"));
    this.currentGame = JSON.parse(localStorage.getItem('game'));
    console.log(JSON.parse(localStorage.getItem('game')));
    console.log(this.currentGame.gamestate);
    this.renderGame();
    let split = this.currentGame.gamestate.split('');
  }

  makeAMove($event, index) { 
    console.log("inside makeAMove");
    let split = this.currentGame.gamestate.split('');
    console.log(split);
    let turn = Math.max.apply(Math, split) + 1;
    let currentUser = this.currentUser.username;
    if(this.moveNumber < turn){
      console.log("Move<turn");
      return;
    }
    if(turn > 9){
      console.log("turn>9");
      return;
    }
    if(this.currentGame.result != "INPROGRESS"){
      console.log("Not Inprogress");
      return;
    }
    if(turn%2 == 1){
      if(currentUser != this.currentGame.playerX){
        console.log("not player X turn");
        return;
      }
    } else {
      if(currentUser != this.currentGame.playerO){
        console.log("not player O turn");
       return;
      }
    }
    if(this.board[index] == ""){
      split[index] = turn;
      this.currentGame.gamestate = split.join('');
      console.log(this.currentGame.gamestate);
      this.gameService.sendPlayerMove(this.currentGame.gameId, this.currentGame.gamestate).subscribe(resp=>{
        if(resp){
          this.renderGame();
          //remove old game object is resp successfull and add new game state to local storage
          //localStorage.removeItem('game');
          //localStorage.setItem('game', JSON.stringify(this.currentGame ))
           //this.router.navigate(['/dashboard']);
        }
        //have notification that move was not sent successfully
  
      });
    }
  }

  //RenderPlayedGame
  renderGame() {
    let gameState = this.currentGame.gamestate.split('');
    //get specific game from ID
      if(this.isCute){

      }
    for(let i = 0; i < gameState.length; i++) {
      this.board[i] = "";
        this.img[i] = "";
      
      //console.log("inside For") 
      if(Number(gameState[i]) == 0){
        //console.log("0")

        this.board[i] = "";
        //console.log(this.board)
      } else if (Number(gameState[i]) % 2 == 0){
        //console.log("even");
        this.board[i] = "O";
        if(this.isCute){this.gameService.getDog().subscribe(resp => {
          this.board[i] = ""
          this.img[i] = resp[0].url;
        });}
        
        //console.log(this.board)
      } else {
        //console.log("odd");
        this.board[i]= "X";
        if(this.isCute){this.gameService.getCat().subscribe(resp => {
          this.board[i]= "";
          this.img[i] = resp[0].url;
        });}
        //console.log(this.board)
      }
    }
   

  }
  renderPartGame(event, int){
    this.moveNumber = this.moveNumber + int;
    if(this.moveNumber < 0){
      this.moveNumber = 0;
    }
    if(this.moveNumber > 9){
      this.moveNumber = 9;
    }
    let gameState = this.currentGame.gamestate.split('');
    //get specific game from ID
    for(let i = 0; i < gameState.length; i++) {
      this.board[i] = "";
        this.img[i] = "";
      if(Number(gameState[i]) > this.moveNumber){
        this.board[i] = "";
        this.img[i] = "";
        continue;
      }
      //console.log("inside For") 
      if(Number(gameState[i]) == 0){
        //console.log("0")
        this.board[i] = "";
        this.img[i] = "";
        //console.log(this.board)
      } else if (Number(gameState[i]) % 2 == 0){
        //console.log("even");
        this.board[i] = "O";
        if(this.isCute){this.gameService.getDog().subscribe(resp => {
          this.board[i] = ""
          this.img[i] = resp[0].url;
        });}
        //console.log(this.board)
      } else {
        //console.log("odd");
        this.board[i]= "X";
        if(this.isCute){this.gameService.getCat().subscribe(resp => {
          this.board[i]= "";
          this.img[i] = resp[0].url;
        });}
        //console.log(this.board)
      }
  }
}
refresh(){
  console.log("Refresh");
  this.gameService.getGameById(this.currentGame.gameId).subscribe((resp: Game) => {
    console.log(resp);
    localStorage.setItem('game', JSON.stringify(resp));
    this.currentGame.gamestate = resp.gamestate;
    this.renderGame();
  });
}
toggleCute(){
  if(this.isCute){
    this.isCute = false;
    this.renderPartGame(0, 0);
  } else {
    this.isCute = true;
    this.renderPartGame(0, 0);
  }
}
exitGame(){
  this.gameService.exitGame();

}
}
