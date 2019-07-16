import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TicketsFacade } from './state/tickets.facade';
import { filter, withLatestFrom, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketGuard implements CanActivate {
  constructor(private ticketsFacade: TicketsFacade, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const ticketId: number = parseInt(next.paramMap.get('ticketId'), 10);
    const loaded$: Observable<boolean> = this.ticketsFacade.loaded$.pipe(
      tap(v => console.log('Loaded?', v))
    );
    const ticketExists$ = this.ticketsFacade.tickets$.pipe(
      filter(Boolean),
      map(tickets => !!tickets.find(ticket => ticket.id === ticketId))
    );

    return loaded$.pipe(
      withLatestFrom(ticketExists$),
      tap(v => console.log(v)),
      map(([ticketsLoaded, ticketExists]) => ticketsLoaded && ticketExists),
      tap(ticketExists => {
        if (!ticketExists) {
          this.router.navigate(['/']);
        }
      })
    );
  }
}
