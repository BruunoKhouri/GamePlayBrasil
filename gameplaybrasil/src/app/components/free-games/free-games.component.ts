import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';
import { GamesModel } from '../../model/games.model';

@Component({
  selector: 'app-free-games',
  templateUrl: './free-games.component.html',
  styleUrls: ['./free-games.component.scss']
})
export class FreeGamesComponent implements OnInit {
  displayedPlatforms: any[] = [];
  games?: GamesModel;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {

  }

  private async getFreeGames() {
    try {
      this.games = await this.gamesService.getFreeGames().toPromise();
     

    } catch (error) {
      console.error(error);
    }
  }

  private convertPlatformsToSvg() {
    this.games?.results.map((obj) => {
      obj.platforms.map((result) => {     
        let firstPart = result.platform.name.split(" ")[0];
        if (firstPart == 'PlayStation') {
          let svg = './../../assets/icons/icons8-playstation.svg'
          result.platform.image = svg;
        } else if (firstPart == 'Xbox') {
          let svg = './../../assets/icons/icons8-xbox.svg'
          result.platform.image = svg;
        } else {
          let svg = './../../assets/icons/pc-computer-with-monitor_icon-icons.com_56249.svg';
          result.platform.image = svg;
        }
      });
    });    
  }
}
