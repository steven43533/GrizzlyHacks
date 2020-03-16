import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {UserdashboardComponent} from './userdashboard/userdashboard.component';
import {AdmindashboardComponent} from './admindashboard/admindashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingpageComponent },
  { path: 'user', component: UserdashboardComponent },
  { path: 'admin', component: AdmindashboardComponent },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
