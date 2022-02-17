import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  protected isDropdownUserOpen: boolean

  constructor() {
    this.isDropdownUserOpen = false;
  }

  ngOnInit() {
  }

  openDropdownUser(): void {
    this.isDropdownUserOpen = !this.isDropdownUserOpen;
  }

  closeDropdownUser(): void {
    this.isDropdownUserOpen = false;
  }

}
