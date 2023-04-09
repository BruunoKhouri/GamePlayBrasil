import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { posts } from 'src/app/model/posts.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public title?: string;
  public post?: any;
  public trailer: any;
  public author?: string;
  public date?: string;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.getIdroute();
    posts.map((post) => {
      if (post.id == 1) {
        this.title = post.title;
        this.post = post.data;
        this.author = post.author;
        this.date = post.date;
        if (post.trailer) {
          this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(post.trailer);       
        }
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
