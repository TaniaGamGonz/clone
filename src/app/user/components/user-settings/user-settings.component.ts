import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit, DoCheck {

  public url: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.getUrl();
  }

  ngOnInit() { }

  ngDoCheck() {
    this.getUrl();
  }

  getUrl() {
    this.url = this.route.snapshot.firstChild.routeConfig.path;
  }
}
