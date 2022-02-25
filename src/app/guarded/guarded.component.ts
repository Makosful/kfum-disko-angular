import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-guarded',
  templateUrl: './guarded.component.html',
  styleUrls: ['./guarded.component.scss']
})
export class GuardedComponent implements OnInit {

  constructor(
    private keycloakService: KeycloakService
  ) { }

  user = '';

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  private initializeUserOptions() {
    this.user = this.keycloakService.getUsername();
  }

  logout() {
    this.keycloakService.logout(window.location.origin);
  }

}
