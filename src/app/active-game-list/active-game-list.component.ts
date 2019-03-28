import { Game } from './../models/game';
import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'active-game-list',
  templateUrl: './active-game-list.component.html',
  styleUrls: ['./active-game-list.component.css']
})
export class ActiveGameListComponent implements OnInit {
  game:Game;

  constructor(
    private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe((resp: Game[]) => {
      console.log(resp);
      for(let i = 0; i< resp.length;i++){
          this.game.gameId = resp[i].gameId;
          this.game.playerX = resp[i].playerX
          this.game.playerO = resp[i].playerO;
          this.game.started = resp[i].started 
          this.game.finished = resp[i].finished 
          this.game.result = resp[i].result 

      }
    })
  }
}
