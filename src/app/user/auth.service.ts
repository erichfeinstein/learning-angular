import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}
  currentUser: IUser;
  loginUser(userName: string, password: string) {
    const loginInfo = { username: userName, password };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(
        tap(data => {
          this.currentUser = data['user'] as IUser;
        })
      )
      .pipe(
        catchError(err => {
          return of(false);
        })
      );
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
