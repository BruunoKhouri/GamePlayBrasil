import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { posts } from 'src/app/model/posts.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public posts = posts;

  constructor(private router: Router, private gamesService: GamesService) { }

  ngOnInit(): void {
  }
  public goToPost(id: number) {
    this.router.navigate(['/artigo', id]);
    this.gamesService.getPost.emit(id);
  }
}
