import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailComponent } from './containers/ticket-detail/ticket-detail.component';
import { TicketGuard } from './ticket.guard';
import { TicketListComponent } from './containers/ticket-list/ticket-list.component';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketListComponent
  },
  {
    path: 'tickets/:ticketId',
    component: TicketDetailComponent,
    canActivate: [TicketGuard]
  },
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
