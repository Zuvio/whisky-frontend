import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetailersComponent } from './retailers/retailers.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { WhiskysComponent } from './whiskys/whiskys.component';
import { WhiskyDetailComponent } from './whisky-detail/whisky-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RetailersComponent,
    BreweriesComponent,
    WhiskysComponent,
    WhiskyDetailComponent
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
