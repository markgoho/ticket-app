import { createReducer, on, Action } from '@ngrx/store';

import { User } from '../../backend.service';
import { getUsersStart, getUsersSuccess, getUsersFail } from './users.actions';

export const USERS_FEATURE_KEY = 'users';

export interface UsersState {
  users: User[];
  loading: boolean;
  loaded: boolean;
}

export interface UsersPartialState {
  readonly [USERS_FEATURE_KEY]: UsersState;
}

export const initialState: UsersState = {
  users: undefined,
  loading: false,
  loaded: false
};

export const reducer = createReducer<UsersState>(
  initialState,
  on(getUsersStart, state => ({ ...state, loading: true })),
  on(getUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    loaded: true
  })),
  on(getUsersFail, state => ({ ...state, loading: false }))
);

export function usersReducer(state: UsersState | undefined, action: Action) {
  return reducer(state, action);
}
