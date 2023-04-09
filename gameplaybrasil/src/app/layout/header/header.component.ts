import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Meta, Title } from '@angular/platform-browser';
import { BannerEmphasis, headerEmphasis, headerHome, posts } from 'src/app/model/posts.model';
import { ActivatedRoute, Router } from '@angular/router';
import { about } from 'src/app/model/about.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public game?: any;
  public title: string = BannerEmphasis.title;
  public subTitle: string = BannerEmphasis.subtitle;
  public img: string = BannerEmphasis.img;
  public idPage?: number;

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private titleService: Title,
    private metaService: Meta) {
    this.gamesService.getPost.subscribe(id => {
      this.idPage = id;
      if (id) {
        posts.map((obj) => {
          this.title = obj.title;
          this.subTitle = obj.subtitle;
          this.img = obj.img;
          this.titleService.setTitle(this.title);
          this.metaService.updateTag({ name: 'description', content: `${this.subTitle}` });

        });
      }
      if (id == 2) {
        this.title = BannerEmphasis.title;
        this.subTitle = BannerEmphasis.subtitle;
        this.img = BannerEmphasis.img;
        this.titleService.setTitle(headerEmphasis.title);
        this.metaService.updateTag({ name: 'description', content: `${headerEmphasis.description}` });
      }
      if (id == 0) {
        this.title = BannerEmphasis.title;
        this.subTitle = BannerEmphasis.subtitle;
        this.img = BannerEmphasis.img;
        this.titleService.setTitle(headerHome.title);
        this.metaService.updateTag({ name: 'description', content: `${headerHome.description}` });
      } if (id == 3) {
        this.title = `Sobre ${about.name}`;
        this.subTitle = '';
        this.img = about.img;
        this.titleService.setTitle(about.title);
        this.metaService.updateTag({ name: 'description', content: `${about.description}` });
      }

    })
  }

  ngOnInit(): void {


  }


  goToHome() {
    this.router.navigate(['']);
    this.gamesService.getPost.emit(0);
  }

  goToAbout(id: number) {
    this.router.navigate(['/sobre', id]);
    this.gamesService.getPost.emit(3);
  }

  goToEmphasis() {
    if (this.idPage == 0 || this.idPage == 2) {
      this.router.navigate(['/destaque']);
      this.gamesService.getPost.emit(2);
    }

  }


}
