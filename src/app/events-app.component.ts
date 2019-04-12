import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <h2>Events App</h2>
    <events-list></events-list>
    <img src="./assets/images/basic-shield.png" />
  `,
})
export class EventsAppComponent {
  title = 'angular-fundamentals';
}
