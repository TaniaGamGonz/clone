import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrls: ['./header-dropdown.component.scss']
})
export class HeaderDropdownComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('ChildComponent:OnInit');
  }


  ngOnDestroy() {
    console.log('ChildComponent:OnDestroy');
  }

}
