import { Injectable } from '@angular/core';
import { events } from '../event-data.js';

@Injectable()
export class EventService {
  //   constructor(private http: Http) {}
  getEvents() {
    return events;
  }
  getEvent(id: number) {
    for (const event of events) {
      if (event.id === id) {
        return event;
      }
    }
  }
}
