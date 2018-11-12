import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetailersComponent } from './retailers/retailers.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { WhiskysComponent } from './whiskys/whiskys.component';

@NgModule({
  declarations: [
    AppComponent,
    RetailersComponent,
    BreweriesComponent,
    WhiskysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
