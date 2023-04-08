import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmphasisComponent } from './emphasis.component';
import { EmphasisRoutingModule } from './emphasis.routing.module';



@NgModule({
  declarations: [
    EmphasisComponent
  ],
  imports: [
    CommonModule,
    EmphasisRoutingModule
  ]
})
export class EmphasisModule { }
