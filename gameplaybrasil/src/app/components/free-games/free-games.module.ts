import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeGamesRoutingModule } from './free-games.routing.module';
import { FreeGamesComponent } from './free-games.component';
import { RegexPipe } from './pipi-regex';



@NgModule({
  declarations: [
    FreeGamesComponent,
    RegexPipe
   
  ],
  imports: [
    CommonModule,
    FreeGamesRoutingModule,
   
  ]
})
export class FreeGamesModule { }
