//Module Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './modules/app-routing.module';


//FireBase Imports
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule} from '@angular/fire/compat/storage';
import {environment} from '../environments/environment';

//Components
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './UserStuff/create-account/create-account.component';
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
import { VerifyEmailUserComponent } from './UserStuff/verify-email-user/verify-email-user.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';



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
    EventCalanderComponent,
    VerifyEmailUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
