import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/model/posts.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public post?: any;


  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) { }

  ngOnInit(): void {
    this.getIdroute();
    posts.map((post) => {
      if (post.id == 1) {
        this.post = post.data;
      }
    });
  }

  getIdroute() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.gamesService.getPost.emit(id);
    });
  }

}
