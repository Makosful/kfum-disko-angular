import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardedComponent } from './guarded/guarded.component';
import { HomeComponent } from './home/home.component';
import {initializeKeycloak} from "./utils/app.init";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuardedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
