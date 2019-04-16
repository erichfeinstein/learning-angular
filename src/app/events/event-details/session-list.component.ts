import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  visibleSessions: ISession[];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filterBy) {
    if (filterBy === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      if (filterBy === 'beginner') {
        this.visibleSessions = this.sessions.filter(session => {
          if (session.level === 'Beginner') return session;
        });
      }
      if (filterBy === 'intermediate') {
        this.visibleSessions = this.sessions.filter(session => {
          if (session.level === 'Intermediate') return session;
        });
      }
      if (filterBy === 'advanced') {
        this.visibleSessions = this.sessions.filter(session => {
          if (session.level === 'Advanced') return session;
        });
      }
    }
  }
}
