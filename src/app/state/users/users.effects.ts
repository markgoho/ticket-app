import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { BackendService } from '../../backend.service';
import { getUsersStart, getUsersSuccess, getUsersFail } from './users.actions';

@Injectable()
export class UsersEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsersStart),
      switchMap(() =>
        this.backend.users().pipe(
          map(users => getUsersSuccess({ users })),
          catchError(() => of(getUsersFail()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private backend: BackendService) {}
}
