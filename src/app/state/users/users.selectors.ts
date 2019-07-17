import { createFeatureSelector, createSelector } from '@ngrx/store';

import { USERS_FEATURE_KEY, UsersState } from './users.reducer';

// Lookup the 'Cart' feature state managed by NgRx
const getUsersState = createFeatureSelector<UsersState>(USERS_FEATURE_KEY);

const getLoading = createSelector(
  getUsersState,
  (state: UsersState) => state.loading
);

const getLoaded = createSelector(
  getUsersState,
  (state: UsersState) => state.loaded
);

const getUsers = createSelector(
  getUsersState,
  (state: UsersState) => {
    return state.users;
  }
);

export const usersQuery = {
  getLoading,
  getLoaded,
  getUsers
};
