import { Component } from '@angular/core';

import { TicketsFacade } from '../../state/tickets.facade';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent {
  constructor(public ticketsFacade: TicketsFacade) {}
}
