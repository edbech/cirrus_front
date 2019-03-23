import { Router } from '@angular/router';
import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../models/users';


@Component({
  selector: 'game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  user: User;
  publicOrPrivate: any;

  //access ? public= 0 : private =1

  private gameArray = Array(9).fill(0);
  private myTurn = <Boolean>true;
  private whoWillStart = <Boolean>true;

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }
  ngOnInit() {

  }

  //Start Newgame
  newGame() {
    //gameServe
    this.gameService.createNewGame
      // .subscribe(response => {

      //   this.router.navigate(['/game']);
      // })

  }
  //http.post(env_API_URL+'games'+`access`)
  //route to game screen wait for unique gameID
  /*
  game state
  Player X

  */

  //Check turn
  checkTurn() { // returns boolian, true if it is the current user's turn
    Math.max();
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
  renderGame(GameId) {
    /*
    get specific game from ID
    for the length of the array, we get the number,    
      if(arr[i] == 0){
        place blank
      } else if ( arr[i] % 2 == 0){
        place O
      } else {
        place X
      }
   */
  }

  resetGame() {
    // this.playedGameStatus = [];
    //this.game
  }
  makeAMove(event: any, index: number) {
    //gameArray[index]
    //update game
  }


}
