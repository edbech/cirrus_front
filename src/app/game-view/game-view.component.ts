import { GameService } from './../services/game.service';
import { Game } from './../models/game';
import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';


@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  currentGame:Game;
  constructor(
    private gameService: GameService,

  ) { }

  private currentGame:Game;

  ngOnInit() {

     
  }
  
  exitGame(){
    this.gameService.exitGame();

  }
}
