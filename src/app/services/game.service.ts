import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, } from '@angular/common/http';
import { Observable, BehaviorSubject, observable } from 'rxjs';
import { Game } from '../models/game'

import { environment as env } from '../../environments/environment';

@Injectable()
export class GameService {


  public currentGame: Observable<Game>

  constructor(
    private http: HttpClient,
    private route: Router
  ) {

  }


  sendPlayerMove(gameId, gamestate) {
   
    let gamestate2: string = '';
    for(let i=0; i < gamestate.length; i++){
      gamestate2 += gamestate[i];
    }
    console.log(gamestate2);
    let body = {
      gameId: gameId,
      gamestate: gamestate2
    }
    console.dir(body, "body");
    return this.http.put(env.API_URL + '/games', body);
  }

  receivePlayerMove(): any {
    return this.http.get(env.API_URL + 'gameState')
  }

  getAllGamesInProgress() {
    //return this.http.get(env.API_URL+'gameState')
  }

  getGames() {
    return this.http.get(env.API_URL+'/games');
  }
  createNewGame(player1Id, player2Id, publicOrPrivate) {
    let body = {
      playerO: player1Id,
      playerX: player2Id,
      ispublic: publicOrPrivate
    }
    console.log(body);
    console.log(JSON.stringify(body));

    return this.http.post(env.API_URL + 'games', body);

  }
  exitGame() {
    if (localStorage.getItem('currentGame')) {
      localStorage.removeItem('curentGame');
    }
    this.route.navigate(['/dashboard']);
  }






}
