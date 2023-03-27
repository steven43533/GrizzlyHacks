import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LandingpageComponent} from '../landingpage/landingpage.component';
import {AdmindashboardComponent} from '../admindashboard/admindashboard.component';
import {EmailActionComponent} from '../email-action/email-action.component';
import {CreateAccountComponent} from '../UserStuff/create-account/create-account.component';
import {LoginComponent} from '../UserStuff/login/login.component';
import {UserGuardGuard} from '../guards/user-guard.guard';
import {UserDashboardComponent} from '../UserStuff/user-dashboard/user-dashboard.component';
import {ApplicationComponent} from '../application/application.component';
import {AdminGuard} from '../guards/admin.guard';
import {VerifyEmailUserComponent} from '../UserStuff/verify-email-user/verify-email-user.component';
import { SuperAdminDashboardComponent } from '../super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminGuard } from '../guards/super-admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingpageComponent },
  { path: 'user', component: UserDashboardComponent, canActivate: [UserGuardGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'email/action', component: EmailActionComponent, data: { title: 'Confirm Email Address' }},
  { path: 'createAccount', component: CreateAccountComponent},
  { path: 'application', component: ApplicationComponent},
  { path: 'verifyEmail', component: VerifyEmailUserComponent},
  { path: 'admin', component: AdmindashboardComponent, canActivate: [AdminGuard, SuperAdminGuard]},
  { path: 'superAdmin', component: SuperAdminDashboardComponent, canActivate: [SuperAdminGuard]},
  
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
