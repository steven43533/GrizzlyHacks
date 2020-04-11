import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './modules/app-routing.module';

import { FireBaseStuffModule } from './modules/fire-base-stuff.module';
import { CreateAccountComponent } from './UserStuff/create-account/create-account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './UserStuff/login/login.component';
import { VerifyEmailComponent } from './email-action/verify-email/verify-email.component';
import { HeaderComponent } from './header/header.component';
import { EmailActionComponent } from './email-action/email-action.component';
import { ResetPasswordComponent } from './email-action/reset-password/reset-password.component';
import { UserDashboardComponent } from './UserStuff/user-dashboard/user-dashboard.component';
import { ApplicationComponent } from './application/application.component';
import { UserQueryPipe } from './admindashboard/user-query.pipe';
import { CheckFilerPipe } from './admindashboard/check-filer.pipe';
import { EventCalanderComponent } from './EventCalanderStuff/event-calander/event-calander.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    AdmindashboardComponent,
    CreateAccountComponent,
    LoginComponent,
    VerifyEmailComponent,
    HeaderComponent,
    EmailActionComponent,
    ResetPasswordComponent,
    UserDashboardComponent,
    ApplicationComponent,
    UserQueryPipe,
    CheckFilerPipe,
    EventCalanderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FireBaseStuffModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
