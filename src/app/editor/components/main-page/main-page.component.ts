import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  isHidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  hide() {
    this.isHidden = !this.isHidden;
  }
}
