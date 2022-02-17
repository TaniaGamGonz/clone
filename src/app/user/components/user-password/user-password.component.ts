import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.scss']
})
export class UserPasswordComponent implements OnInit {

  protected user: User
  protected currentPassword: string
  protected newPassword: string
  protected passwordRepeat: string

  constructor() {
    this.user = new User("", "", "", "", "", "");
  }

  ngOnInit() {
  }

  arePasswordsEqual(): boolean {
    return this.newPassword === this.passwordRepeat;
  }

  onSubmit(): void {
    this.user.password = this.newPassword;
    console.log(this.user);
  }
}
