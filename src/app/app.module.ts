import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {initializeKeycloak} from "./utils/app.init";
import {NavbarComponent} from './shared/navbar/navbar.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {GraphqlModule} from "./graphql.module";
import {HttpClientModule} from "@angular/common/http";
import {ApolloModule} from "apollo-angular";
import {KfumDiskoModule} from "./kfum-disko/kfum-disko.module";
import {NotFoundComponent} from "./shared/not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
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
