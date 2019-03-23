import { environment } from './../../environments/environment';
import { HttpClient,HttpHeaders,HttpResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GameService {
access: any;

private headers = new HttpHeaders({'Content-Type': 'application/json'});
  options = {
  headers: this.headers
  };

public gameGrid = <Array<Object>>[[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  constructor(
    private http: HttpClient

    ) {}



  getAllGamesInProgress(){
    //
  }

  getGameById(id){

  }
  createNewGame(){
    return this.http.get(env.API_URL+'games'+`${{}}`)
    //{{this.gameArray}}
    // this.http.post(env.API_URL+ '/game/',this.options)
    // .subscribe(response =>{
    //   response.json()
    // })
  }
  
  checkPlayerTurn(){
    //get('move/turn')
    this.http.get(env.API_URL+ '/game/')
  }
  makePlayerMove(){
    /*
    checkPlayerTurn(){

    }


    */
  }
  getNextMove(){
    //get("move/next")


  }



}
