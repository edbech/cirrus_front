import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, } from '@angular/common/http';
import { Observable, BehaviorSubject, observable } from 'rxjs';


import { environment as env } from '../../environments/environment';

@Injectable()
export class GameService {

  private gameStateSource = new BehaviorSubject(Array(9).fill(0));
  public gameStateCurrent = this.gameStateSource.asObservable();

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = {
    headers: this.headers
  };

  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  //call the next up-to-date gamestate from behaviorsubject
  changeGameState(gameState){
    this.gameStateSource.next(gameState);
  }


  sendPlayerMove(state) {
    console.log(state);
    // this.http.post(env.API_URL + 'gameState', state)
    
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
  createNewGame() {
    //return this.http.get(env.API_URL + 'games' + `${{}}`)

  }







}
