import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { GuardedComponent } from './guarded/guarded.component';
import { HomeComponent } from './home/home.component';
import {initializeKeycloak} from "./utils/app.init";
import {GraphqlModule} from "./graphql.module";
import {HttpClientModule} from "@angular/common/http";
import {ApolloModule} from "apollo-angular";
import {KfumDiskoModule} from "./kfum-disko/kfum-disko.module";

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
    GraphqlModule,
    HttpClientModule,
    ApolloModule,
    KfumDiskoModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
