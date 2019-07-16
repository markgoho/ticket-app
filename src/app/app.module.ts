import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TICKETS_FEATURE_KEY, ticketsReducer } from './state/tickets.reducer';
import { TicketsEffects } from './state/tickets.effects';
import { TicketDetailComponent } from './containers/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './containers/ticket-list/ticket-list.component';

@NgModule({
  declarations: [AppComponent, TicketDetailComponent, TicketListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(TICKETS_FEATURE_KEY, ticketsReducer),
    EffectsModule.forFeature([TicketsEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
