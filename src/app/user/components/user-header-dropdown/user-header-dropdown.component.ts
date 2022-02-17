import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-header-dropdown',
  templateUrl: './user-header-dropdown.component.html',
  styleUrls: ['./user-header-dropdown.component.scss']
})
export class UserHeaderDropdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('user');
  }
}
