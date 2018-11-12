import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WhiskysComponent } from './whiskys/whiskys.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WhiskyDetailComponent } from './whisky-detail/whisky-detail.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { RetailersComponent} from './retailers/retailers.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: WhiskyDetailComponent },
  { path: 'whiskys', component: WhiskysComponent },
  { path: 'breweries', component: BreweriesComponent },  
  { path: 'retailers', component: RetailersComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
