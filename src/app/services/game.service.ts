import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, } from '@angular/common/http';
import { Observable, BehaviorSubject, observable } from 'rxjs';
import { Game } from '../models/game'

import { environment as env } from '../../environments/environment';

@Injectable()
export class GameService {

  // private currentGameSubject: BehaviorSubject<Game> 
  public currentGame: Observable<Game>
 
  // currentGame = {
  //   id:0,
  //   state: Array(9).fill(0)
  // }
  //public gameStateCurrent = this.gameStateSource.asObservable();

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = {
    headers: this.headers
  };

  constructor(
    private http: HttpClient,
    private route: Router
  ) {
   
  }

  //call the next up-to-date gamestate from behaviorsubject
  changeGameState(game){
    // this.currentGameSubject = new BehaviorSubject<Game>(game);
    // this.currentGame = this.currentGameSubject.asObservable();
   // this.gameStateSource.next(gameState);
  }


  sendPlayerMove(game) {
    console.dir(game.state, "inside sendPlayerMove");
    this.http.post(env.API_URL + '/games', game.state);
    
  }
  receivePlayerMove(): any {
    this.http.get(env.API_URL + 'gameState')

  }

  getAllGamesInProgress() {
    // this.http.get(env.API_URL+'gameState')
  }

  getGameById(id) {
    //this.http.get(env.API_URL+`gameState+${{id}}`)
  }
  createNewGame(player2Username,player1Username) {
    /*
    playerX,playerO,is public
    */
    return this.http.get(env.API_URL + 'games' + `${{}}`)

  }







}
