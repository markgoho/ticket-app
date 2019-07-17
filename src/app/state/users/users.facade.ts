import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UsersPartialState } from './users.reducer';
import { User } from '../../backend.service';
import { getUsersStart } from './users.actions';
import { usersQuery } from './users.selectors';

@Injectable({
  providedIn: 'root'
})
export class UsersFacade {
  users$ = this.store.pipe(select(usersQuery.getUsers));
  loading$ = this.store.pipe(select(usersQuery.getLoading));
  loaded$ = this.store.pipe(select(usersQuery.getLoaded));

  constructor(private store: Store<UsersPartialState>) {
    this.store.dispatch(getUsersStart());
  }

  getUserById(id: number): Observable<User> {
    return this.users$.pipe(
      filter(Boolean),
      map((users: User[]) => users.find(ticket => ticket.id === id))
    );
  }
}
