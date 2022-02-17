import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'clone';

  protected isLogged: boolean

  constructor() { }

  ngOnInit() {
    localStorage.getItem('user') ? this.isLogged = true : !this.isLogged;
  }
}
