import { Game } from './../models/game';
import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'active-game-list',
  templateUrl: './active-game-list.component.html',
  styleUrls: ['./active-game-list.component.css']
})
export class ActiveGameListComponent implements OnInit {
  game:Game;
  games = [];
  gameForm: FormGroup;

  constructor(
    private gameService: GameService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.gameService.getGames().subscribe((resp: Game[]) => {
      for(let i = 0; i< resp.length;i++){
        let g = new Game;
        g.gameId = resp[i].gameId;
        g.playerX = resp[i].playerX;
        g.playerO = resp[i].playerO;
        this.games.push(g);
      }
    });
    this.gameForm = this.formBuilder.group({ 
      gameid:new FormControl('')
     });
  }
  goToGame(){
    this.gameService.getGameById(this.gameForm.value.gameid).subscribe((resp: Game) => {
      console.log(resp);
      localStorage.setItem('game', JSON.stringify(resp));
      this.router.navigate(['game-view']);
    });
  }
}
