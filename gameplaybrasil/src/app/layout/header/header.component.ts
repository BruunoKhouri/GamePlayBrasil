import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Meta, Title } from '@angular/platform-browser';
import { BannerEmphasis, headerEmphasis, headerHome, posts } from 'src/app/model/posts.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public game?: any;
  public title?: string;
  public subTitle: string = BannerEmphasis.subtitle;
  public img: string = BannerEmphasis.data;;

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta) {
    this.gamesService.getPost.subscribe(id => {
      console.log('id', id);
      if (id) {
        posts.map((obj) => {
          this.title = obj.title;
          this.subTitle = obj.subtitle;
          this.img = obj.data;
          this.titleService.setTitle(this.title);
          this.metaService.updateTag({ name: 'description', content: `${this.subTitle}` });

        });
      }
      if (id == 2) {
        this.title = this.game.info.title;
        this.subTitle = BannerEmphasis.subtitle;
        this.img = BannerEmphasis.data;
        this.titleService.setTitle(headerEmphasis.title);
        this.metaService.updateTag({ name: 'description', content: `${headerEmphasis.description}` });
      }
      if (id == 0) {
        this.title = this.game.info.title;
        this.subTitle = BannerEmphasis.subtitle;
        this.img = BannerEmphasis.data;
        this.titleService.setTitle(headerHome.title);
        this.metaService.updateTag({ name: 'description', content: `${headerHome.description}` });
      }
    })
  }

  ngOnInit(): void {
    this.getGameActual();
    console.log('teste');


  }

  getGameActual() {
    this.gamesService.getGameDestak().subscribe((data) => {
      this.game = data;
      console.log('game', this.game);
      this.title = this.game.info.title;
    });
  }

  goToHome() {
    this.router.navigate(['']);
    this.gamesService.getPost.emit(0);
  }

  goToEmphasis() {
    this.router.navigate(['/destaque']);
    this.gamesService.getPost.emit(2);
  }
}
