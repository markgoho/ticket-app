import { createReducer, on, Action } from '@ngrx/store';

import { Ticket } from '../../backend.service';
import {
  getTicketsStart,
  getTicketsSuccess,
  getTicketsFail,
  assignTicketSuccess,
  completeTicketSuccess
} from './tickets.actions';

export const TICKETS_FEATURE_KEY = 'tickets';

export interface TicketsState {
  tickets: Ticket[];
  loading: boolean;
  loaded: boolean;
}

export interface TicketsPartialState {
  readonly [TICKETS_FEATURE_KEY]: TicketsState;
}

export const initialState: TicketsState = {
  tickets: undefined,
  loading: false,
  loaded: false
};

export const reducer = createReducer<TicketsState>(
  initialState,
  on(getTicketsStart, state => ({ ...state, loading: true })),
  on(getTicketsSuccess, (state, { tickets }) => ({
    ...state,
    tickets,
    loading: false,
    loaded: true
  })),
  on(getTicketsFail, state => ({ ...state, loading: false })),
  on(assignTicketSuccess, (state, { ticket }) => ({
    ...state,
    tickets: updateTicket(state.tickets, ticket),
    loading: false,
    loaded: true
  })),
  on(completeTicketSuccess, (state, { ticket }) => ({
    ...state,
    tickets: updateTicket(state.tickets, ticket),
    loading: false,
    loaded: true
  }))
);

export function ticketsReducer(
  state: TicketsState | undefined,
  action: Action
) {
  return reducer(state, action);
}

function updateTicket(tickets: Ticket[], newTicket: Ticket): Ticket[] {
  return tickets.map(existingTicket => {
    if (existingTicket.id === newTicket.id) {
      const updatedTicket = {
        ...existingTicket,
        ...newTicket
      };

      return updatedTicket;
    } else {
      return existingTicket;
    }
  });
}
