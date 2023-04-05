import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public game?: any;
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGameActual();

  }

  getGameActual() {
    this.gamesService.getGameDestak().subscribe((data) => {
      this.game = data;
      console.log('game', this.game);
    });

  }
}
