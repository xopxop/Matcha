import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class SsoService {
  constructor(private oauthService: OAuthService) {}

  get hasValidTokens(): boolean {
    return (
      this.oauthService.hasValidIdToken() &&
      this.oauthService.hasValidAccessToken()
    );
  }

  public login(accountName: string): void {
    this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  public tryLogin(): void {
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
