import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from "apollo-angular";
import {ApolloClientOptions, InMemoryCache} from "@apollo/client/core";
import {HttpLink} from "apollo-angular/http";

import {environment} from "../environments/environment";

const uri = environment.graphqlUri;

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri: uri}),
    cache: new InMemoryCache(),
  }
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    }
  ]
})
export class GraphqlModule {
}
