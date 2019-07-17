import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { TicketsPartialState } from './tickets.reducer';
import { ticketsQuery } from './tickets.selectors';
import {
  getTicketsStart,
  createTicketStart,
  assignTicketStart,
  completeTicketStart
} from './tickets.actions';
import { Ticket } from '../../backend.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsFacade {
  tickets$ = this.store.pipe(select(ticketsQuery.getTickets));
  loading$ = this.store.pipe(select(ticketsQuery.getLoading));
  loaded$ = this.store.pipe(select(ticketsQuery.getLoaded));

  ticketError$: Observable<string>;

  constructor(private store: Store<TicketsPartialState>) {
    this.store.dispatch(getTicketsStart());
  }

  getTicketById(id: number): Observable<Ticket> {
    return this.tickets$.pipe(
      map(tickets => tickets.find(ticket => ticket.id === id))
    );
  }

  createTicket(description: string): void {
    this.store.dispatch(createTicketStart({ description }));
  }

  assignTicket(userId: number, ticketId: number): void {
    this.store.dispatch(assignTicketStart({ userId, ticketId }));
  }

  completeTicket(ticketId: number): void {
    this.store.dispatch(completeTicketStart({ ticketId }));
  }
}
