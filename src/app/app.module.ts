import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetailersComponent } from './retailers/retailers.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { WhiskysComponent } from './whiskys/whiskys.component';
import { WhiskyDetailComponent } from './whisky-detail/whisky-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';
import { WhiskyAddComponent } from './whisky-add/whisky-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterBreweryComponent } from './register-brewery/register-brewery.component';

@NgModule({
  declarations: [
    AppComponent,
    RetailersComponent,
    BreweriesComponent,
    WhiskysComponent,
    WhiskyDetailComponent,
    MessagesComponent,
    DashboardComponent,
    BreweryDetailComponent,
    WhiskyAddComponent,
    LoginComponent,
    RegisterBreweryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
