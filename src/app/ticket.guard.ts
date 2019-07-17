import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TicketsFacade } from './state/tickets/tickets.facade';
import { filter, withLatestFrom, map, tap } from 'rxjs/operators';
import { Ticket } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class TicketGuard implements CanActivate {
  constructor(private ticketsFacade: TicketsFacade, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> {
    const ticketId: number = parseInt(next.paramMap.get('ticketId'), 10);
    const loaded$: Observable<boolean> = this.ticketsFacade.loaded$.pipe();
    const ticketExists$: Observable<boolean> = this.ticketsFacade.tickets$.pipe(
      filter(Boolean),
      map(
        (tickets: Ticket[]) => !!tickets.find(ticket => ticket.id === ticketId)
      )
    );

    return loaded$.pipe(
      withLatestFrom(ticketExists$),
      map(([ticketsLoaded, ticketExists]) => ticketsLoaded && ticketExists),
      tap(ticketExists => {
        if (!ticketExists) {
          this.router.navigate(['/tickets']);
        }
      })
    );
  }
}
