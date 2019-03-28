import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game';


@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {

  constructor() { }

  private currentGame:Game;

  ngOnInit() {
    localStorage.getItem('currentGame');
  }

}
