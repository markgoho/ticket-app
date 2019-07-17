import { createAction, props } from '@ngrx/store';
import { Ticket } from '../../backend.service';

export const getTicketsStart = createAction('[Tickets] Get Tickets Start');
export const getTicketsSuccess = createAction(
  '[Tickets] Get Tickets Success',
  props<{ tickets: Ticket[] }>()
);
export const getTicketsFail = createAction('[Tickets] Get Tickets Fail');

export const createTicketStart = createAction(
  '[Tickets] Create Ticket Start',
  props<{ description: any }>()
);
export const createTicketSuccess = createAction(
  '[Tickets] Create Ticket Success',
  props<{ ticket: Ticket }>()
);
export const createTicketFail = createAction('[Tickets] Create Ticket Fail');

export const assignTicketStart = createAction(
  '[Tickets] Assign Ticket Start',
  props<{ userId: any; ticketId: any }>()
);
export const assignTicketSuccess = createAction(
  '[Tickets] Assign Ticket Success',
  props<{ ticket: Ticket }>()
);
export const assignTicketFail = createAction('[Tickets] Assign Ticket Fail');

export const completeTicketStart = createAction(
  '[Tickets] Complete Ticket Start',
  props<{ ticketId: any }>()
);
export const completeTicketSuccess = createAction(
  '[Tickets] Complete Ticket Success',
  props<{ ticket: Ticket }>()
);
export const completeTicketFail = createAction(
  '[Tickets] Complete Ticket Fail'
);
