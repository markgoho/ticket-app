import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailComponent } from './containers/ticket-detail/ticket-detail.component';
import { TicketGuard } from './ticket.guard';

const routes: Routes = [
  {
    path: 'tickets/:ticketId',
    component: TicketDetailComponent,
    canActivate: [TicketGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
