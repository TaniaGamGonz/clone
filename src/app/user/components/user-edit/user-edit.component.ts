import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  protected user: User

  constructor() {
    this.user = new User("", "", "", "", "", "");
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
  }

}
