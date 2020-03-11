import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FireBaseStuffModule } from './modules/fire-base-stuff.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FireBaseStuffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
