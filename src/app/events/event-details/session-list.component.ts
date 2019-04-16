import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotesAsc);
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
      } else if (filterBy === 'intermediate') {
        this.visibleSessions = this.sessions.filter(session => {
          if (session.level === 'Intermediate') return session;
        });
      } else if (filterBy === 'advanced') {
        this.visibleSessions = this.sessions.filter(session => {
          if (session.level === 'Advanced') return session;
        });
      }
    }
  }
}

function sortByNameAsc(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
function sortByVotesAsc(a, b) {
  if (a.voters.length < b.voters.length) return -1;
  if (a.voters.length > b.voters.length) return 1;
  return 0;
}
