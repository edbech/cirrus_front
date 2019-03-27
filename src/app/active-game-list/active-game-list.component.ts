import { TableService } from './table.service';
import { Component, OnInit } from '@angular/core';
import { Table } from './Table';

@Component({
  selector: 'app-active-game-list',
  templateUrl: './active-game-list.component.html',
  styleUrls: ['./active-game-list.component.css']
})
export class ActiveGameListComponent implements OnInit {
  games: Table[];

  constructor(private tservice: TableService) { }

  ngOnInit() {
    this.tservice.getData().subscribe((data: Table[]) => {
      console.log(data);
      this.games=data;
    })
  }
}
