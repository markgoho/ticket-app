import { createAction, props } from '@ngrx/store';
import { Ticket } from '../backend.service';

export const getTicketsStart = createAction('[Tickets] Get Tickets Start');
export const getTicketsSuccess = createAction(
  '[Tickets] Get Tickets Success',
  props<{ tickets: Ticket[] }>()
);
export const getTicketsFail = createAction('[Tickets] Get Tickets Fail');
