import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { TicketsPartialState } from './tickets.reducer';
import { ticketsQuery } from './tickets.selectors';
import { getTicketsStart } from './tickets.actions';

@Injectable({
  providedIn: 'root'
})
export class TicketsFacade {
  tickets$ = this.store.pipe(select(ticketsQuery.getTickets));
  loading$ = this.store.pipe(select(ticketsQuery.getLoading));
  loaded$ = this.store.pipe(select(ticketsQuery.getLoaded));

  constructor(private store: Store<TicketsPartialState>) {
    this.store.dispatch(getTicketsStart());
  }
}
