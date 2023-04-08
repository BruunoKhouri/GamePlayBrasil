import { Component, OnInit, Renderer2 } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-emphasis',
  templateUrl: './emphasis.component.html',
  styleUrls: ['./emphasis.component.scss']
})
export class EmphasisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.includesHeader();
  }

  private includesHeader() {   
  }

}
