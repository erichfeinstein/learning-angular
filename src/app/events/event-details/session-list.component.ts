import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  @Input() eventId: number;
  visibleSessions: ISession[];

  constructor(private auth: AuthService, private voterService: VoterService) {}

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
        ? this.visibleSessions.sort(sortByNameAsc)
        : this.visibleSessions.sort(sortByVotes);
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(
        this.eventId,
        session,
        this.auth.currentUser.userName
      );
    } else {
      this.voterService.addVoter(
        this.eventId,
        session,
        this.auth.currentUser.userName
      );
    }
    if (this.sortBy === 'votes') this.visibleSessions.sort(sortByVotes);
  }

  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(
      session,
      this.auth.currentUser.userName
    );
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
function sortByVotes(a, b) {
  return b.voters.length - a.voters.length;
}
