import {Component, OnInit} from '@angular/core';
import {faSignOut} from '@fortawesome/free-solid-svg-icons';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSignOut = faSignOut;

  user = 'Testificate';

  constructor(
    private keycloak: KeycloakService
  ) {
  }

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  signOut() {
    this.keycloak.logout(window.location.origin);
  }

  private initializeUserOptions() {
    this.keycloak.isLoggedIn().then(isLoggedIn => {
      if (isLoggedIn)
        this.user = this.keycloak.getUsername();
    })
  }
}
