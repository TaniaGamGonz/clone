import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  protected isDropdownHeaderOpen: boolean;
  // protected isVisible: boolean;
  // protected homeUrl: string = '/home';
  protected router: string;
  protected router2: string;

  protected mobilePicUrl: string = '/user/:id';


  constructor(private routerService: Router,
    private activatedRouterService: ActivatedRoute,
    private _location: Location,
    private _router: Router,
    ) {
    this.isDropdownHeaderOpen = false;
    // this.isVisible = true;
    this.router = _router.url;
  }

  ngOnInit() {
    // const currentUrl = window.location.href;
    // this.isVisible = currentUrl.match(this.homeUrl).length === 0;
    // this.isVisible = currentUrl.match(this.mobilePicUrl).length === 0;
    // this.isVisible = currentUrl.match(this.mobilePicUrl).length === 1;
  }



  openDropdownHeader(): void {
    this.isDropdownHeaderOpen = !this.isDropdownHeaderOpen;
  }

  closeDropdownHeader(): void {
    this.isDropdownHeaderOpen = false;
  }

  backClicked() {
    console.log('holi');
    this._location.back();
  }

}
