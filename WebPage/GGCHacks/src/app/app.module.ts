import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FireBaseStuffModule } from './modules/fire-base-stuff.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { HeaderComponent } from './header/header.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import { EmailActionComponent } from './email-action/email-action.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {UserGuardGuard} from './guards/user-guard.guard';



const routes: Routes = [
  { path: '' ,  component: LandingpageComponent},
  { path: 'email/action', component: EmailActionComponent, data: { title: 'Confirm Email Address' }},
  { path: 'createAccount', component: CreateAccountComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [UserGuardGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent,
    VerifyEmailComponent,
    HeaderComponent,
    EmailActionComponent,
    ResetPasswordComponent,
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    FireBaseStuffModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
