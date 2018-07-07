import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
