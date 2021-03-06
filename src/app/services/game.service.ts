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
    for (let i = 0; i < gamestate.length; i++) {
      gamestate2 += gamestate[i];
    }
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
  }

  getGames() {
    return this.http.get(env.API_URL + '/games');
  }
  
  getGameById(id) {
    return this.http.get(env.API_URL + '/games/' + id);
  }

  createNewGame(player1Id, player2Id, publicOrPrivate) {
    let body = {
      playerO: player1Id,
      playerX: player2Id,
      ispublic: publicOrPrivate
    }

    return this.http.post(env.API_URL + 'games', body);

  }
  exitGame() {
    if (localStorage.getItem('currentGame')) {
      localStorage.removeItem('curentGame');
    }
    this.route.navigate(['/dashboard']);
  }
  getDog(){
    return this.http.get('https://api.thedogapi.com/v1/images/search')
}
  getCat(){return this.http.get('https://api.thecatapi.com/v1/images/search');}
}
