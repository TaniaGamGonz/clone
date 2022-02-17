import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/* import { User } from 'src/app/core/models/user'; */

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Output()
backToLogin: EventEmitter<any> = new EventEmitter;

 user: any = {};

  constructor() { }

  ngOnInit() {
  }

  returnToLogin() {
      this.backToLogin.emit();
  }

}
