import { Component } from '@angular/core';

import { TicketsFacade } from './state/tickets.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public ticketsFacade: TicketsFacade) {}
}
