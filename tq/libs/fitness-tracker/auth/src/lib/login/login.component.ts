import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'tq-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public showLoginError = false;

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm): void {
    this.showLoginError = true;
  }
}
