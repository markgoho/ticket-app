import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TICKETS_FEATURE_KEY,
  ticketsReducer
} from './state/tickets/tickets.reducer';
import { TicketsEffects } from './state/tickets/tickets.effects';
import { TicketDetailComponent } from './containers/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './containers/ticket-list/ticket-list.component';
import { USERS_FEATURE_KEY, usersReducer } from './state/users/users.reducer';
import { UsersEffects } from './state/users/users.effects';

@NgModule({
  declarations: [AppComponent, TicketDetailComponent, TicketListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(TICKETS_FEATURE_KEY, ticketsReducer),
    EffectsModule.forFeature([TicketsEffects]),
    StoreModule.forFeature(USERS_FEATURE_KEY, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
