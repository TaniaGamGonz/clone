import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected isRegistered: boolean
  protected showError: boolean = false;
  userLog: any = {};

  constructor() {
    this.isRegistered = true;
  }

  ngOnInit() {
  }

  checkErrorStatus(mail, password){
    if (mail.valid && password.valid) {
      this.showError = false;
    localStorage.setItem("user", this.userLog.password);
    location.reload();
    } else {
      this.showError = true;
    }
  }

  isNotRegistered(): void {
    this.isRegistered = !this.isRegistered;
  }

  closeError() {
    this.showError = false;
  }

}
