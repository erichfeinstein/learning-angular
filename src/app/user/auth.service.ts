import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { currentId } from 'async_hooks';

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'BonJovi',
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
