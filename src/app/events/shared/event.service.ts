import { Injectable } from '@angular/core';
import { events } from '../event-data.js';

@Injectable()
export class EventService {
  //   constructor(private http: Http) {}
  getEvents() {
    return events;
  }
}
