import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetailersComponent } from './retailers/retailers.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { WhiskysComponent } from './whiskys/whiskys.component';
import { WhiskyDetailComponent } from './whisky-detail/whisky-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RetailersComponent,
    BreweriesComponent,
    WhiskysComponent,
    WhiskyDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
