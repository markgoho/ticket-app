import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';

import { Ticket, User } from '../../backend.service';
import { TicketsFacade } from '../../state/tickets/tickets.facade';
import { UsersFacade } from '../../state/users/users.facade';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent {
  assignUser = false;

  ticketId$: Observable<number> = this.route.paramMap.pipe(
    filter(params => params.has('ticketId')),
    map(params => parseInt(params.get('ticketId'), 10))
  );

  currentTicket$: Observable<Ticket> = this.ticketId$.pipe(
    switchMap(id => this.ticketsFacade.getTicketById(id))
  );

  assignee$: Observable<User> = this.currentTicket$.pipe(
    switchMap(ticket => this.usersFacade.getUserById(ticket.assigneeId)),
    filter<User>(Boolean)
  );

  // ticketDetailVM$ = combineLatest([this.currentTicket$, this.assignee$]).pipe(
  //   map(([ticket, assignee]: [Ticket, User]) => ({ ticket, assignee }))
  // );

  constructor(
    private route: ActivatedRoute,
    public ticketsFacade: TicketsFacade,
    public usersFacade: UsersFacade
  ) {}

  assignUserToTicket(userId: number, ticketId: number): void {
    this.assignUser = false;
    this.ticketsFacade.assignTicket(userId, ticketId);
  }
}
