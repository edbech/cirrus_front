import { HighscoresService } from '../services/highscores.service';
import { Component, OnInit } from '@angular/core';
import { Highscores } from './Highscores'

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {

  users: Highscores[];

  constructor(private hService: HighscoresService) { }

  ngOnInit() {
    this.hService.getData().subscribe((data: Highscores[]) => {
      console.log(data);
      this.users = data;
    })
  }
}
