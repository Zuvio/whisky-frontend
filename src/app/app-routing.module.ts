import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhiskysComponent } from './whiskys/whiskys.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WhiskyDetailComponent } from './whisky-detail/whisky-detail.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { RetailersComponent} from './retailers/retailers.component';
import { BreweryDetailComponent } from './brewery-detail/brewery-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'whiskydetail/:id', component: WhiskyDetailComponent },
  { path: 'brewerydetail/:id', component: BreweryDetailComponent },
  { path: 'whiskys', component: WhiskysComponent },
  { path: 'breweries', component: BreweriesComponent },  
  { path: 'retailers', component: RetailersComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
