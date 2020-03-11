import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FireBaseStuffModule } from './modules/fire-base-stuff.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';



const routes: Routes = [

]


@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    LoginComponent
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
