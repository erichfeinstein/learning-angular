import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    // this.http.post('/api/login');

    this.currentUser = {
      id: 1,
      userName,
      firstName: 'John',
      lastName: 'BonJovi',
    };
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
