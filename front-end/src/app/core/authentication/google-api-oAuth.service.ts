import { Injectable } from "@angular/core";
import { JwksValidationHandler, OAuthEvent, OAuthService } from "angular-oauth2-oidc";
import { NavigationService } from "src/app/core/navigation/navigation.service";
import { GoogleOAuthConfig } from "../models/google.api.config";

@Injectable({
  providedIn: 'root'
}) export class GoogleApiOAuthService {
  constructor(
    private oAuthService: OAuthService,
    private readonly navService: NavigationService
  ) {
    this.oAuthService.configure(GoogleOAuthConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    this.oAuthService.events.subscribe((e: OAuthEvent) => {
      console.log(e.type);
      this.handelOAuthEvent(e);
    })
  }

  login(): void {
    this.oAuthService.initCodeFlow()
  }

  logout(): void {
    // maybe try logout method
    this.oAuthService.revokeTokenAndLogout({
      client_id: this.oAuthService.clientId,
      returnTo: this.oAuthService.redirectUri
    }, true);
  }

  get isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  private handelOAuthEvent(event: OAuthEvent) {
    switch (event.type) {
      case 'token_received':
        this.oAuthService.loadUserProfile().then((userProfile) => {
          // this.userProfileSubject.next(userProfile as UserInfo);
        });
        break;
      case 'logout':
        // remove account;
        break;
      case 'user_profile_loaded':
        this.navService.navigateTo('/app');
        break;
      default:
        break;
    }
  }
}
