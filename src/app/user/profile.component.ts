import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles: [
    `
      em {
        float: right;
        color: red;
      }
    `,
  ],
})
export class ProfileComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  profileForm: FormGroup;
  firstName;
  lastName;

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName, [
      Validators.required,
      Validators.pattern('[a-zA-Z].*'),
    ]);
    this.lastName = new FormControl(
      this.authService.currentUser.lastName,
      Validators.required
    );
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  validateLastName() {
    return this.lastName.valid && this.lastName.touched;
  }
  validateFirstName() {
    return this.firstName.valid && this.firstName.touched;
  }

  cancel() {
    this.router.navigate(['events']);
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(
        formValues.firstName,
        formValues.lastName
      );
      this.router.navigate(['events']);
    }
  }
}
