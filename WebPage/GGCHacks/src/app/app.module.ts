import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FireBaseStuffModule } from './modules/fire-base-stuff.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FireBaseStuffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
