import { createReducer, on, Action } from '@ngrx/store';

import { Ticket } from '../backend.service';
import {
  getTicketsStart,
  getTicketsSuccess,
  getTicketsFail
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
  on(getTicketsFail, state => ({ ...state, loading: false }))
);

export function ticketsReducer(
  state: TicketsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
