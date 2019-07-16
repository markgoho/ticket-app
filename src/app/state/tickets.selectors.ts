import { createFeatureSelector, createSelector } from '@ngrx/store';

import { TICKETS_FEATURE_KEY, TicketsState } from './tickets.reducer';

// Lookup the 'Cart' feature state managed by NgRx
const getTicketsState = createFeatureSelector<TicketsState>(
  TICKETS_FEATURE_KEY
);

const getLoading = createSelector(
  getTicketsState,
  (state: TicketsState) => state.loading
);

const getLoaded = createSelector(
  getTicketsState,
  (state: TicketsState) => state.loaded
);

const getTickets = createSelector(
  getTicketsState,
  (state: TicketsState) => {
    return state.tickets;
  }
);

export const ticketsQuery = {
  getLoading,
  getLoaded,
  getTickets
};
