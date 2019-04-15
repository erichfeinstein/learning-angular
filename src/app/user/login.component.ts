import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styles: [
    `
      em {
        float: right;
        color: red;
      }
    `,
  ],
})
export class LoginComponent {
  username;
  password;
  mouseoverLogin;

  constructor(private authService: AuthService) {}

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
  }
}
