import { createAction, props } from '@ngrx/store';
import { User } from '../../backend.service';

export const getUsersStart = createAction('[Users] Get Users Start');
export const getUsersSuccess = createAction(
  '[Users] Get Users Success',
  props<{ users: User[] }>()
);
export const getUsersFail = createAction('[Users] Get Users Fail');
