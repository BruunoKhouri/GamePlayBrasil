import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { about } from 'src/app/model/about.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gamesService: GamesService) { }


  public title?: string = about.title;
  public post?: any = about.data;  
 


  ngOnInit(): void {
    this.getIdroute();
  }

  getIdroute() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.gamesService.getPost.emit(id);
    });
  }
}
