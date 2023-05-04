import { Component } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { GoogleOAuthConfig } from "../../models/google.api.config";
import { GoogleApiOAuthService } from "../../services/google-api-oAuth.service";

@Component({
  selector: 'matcha-login-wrapper',
  templateUrl: './login-wrapper.component.html',
  styleUrls: [
    './login-wrapper.component.scss'
  ]
}) export class LoginWrapperComponent {
  constructor(
    private googleOAuth: GoogleApiOAuthService
  ) {
  }

  get isLoggedIn(): boolean {
    return this.googleOAuth.isLoggedIn;
  }

  LogInWithGoogleButtonClicked() {
    this.googleOAuth.login();
  }

  logout() {
    this.googleOAuth.logout();
  }
}