import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'prefix'},
  { path: 'home', component: LandingpageComponent },
  { path: 'user-dashboard', component: UserdashboardComponent},
  { path: 'admin-dashboard', component: AdmindashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    UserdashboardComponent,
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: LandingpageComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
