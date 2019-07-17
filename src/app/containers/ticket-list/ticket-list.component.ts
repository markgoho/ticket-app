import { Component, OnInit } from '@angular/core';

import { TicketsFacade } from '../../state/tickets/tickets.facade';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  createTicket = false;
  ticketForm: FormGroup;

  constructor(public ticketsFacade: TicketsFacade, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ticketForm = this.fb.group({
      description: ''
    });
  }

  addTicket(): void {
    this.ticketsFacade.createTicket(this.ticketForm.value);
    this.ticketForm.reset();
    this.createTicket = false;
  }
}
