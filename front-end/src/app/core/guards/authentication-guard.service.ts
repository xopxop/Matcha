import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { ClaimsService } from '../authentication/claims.service';
import { SsoService } from '../authentication/sso.service';
import { AuthService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private readonly authService: AuthS
    ervice,
    // private readonly navigationService: NavigationService,
    private readonly claimService: ClaimsService,
    private readonly ssoService: SsoService
  ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      (this.authService.isLoggedIn && this.claimService.sessionClaims) ||
      this.ssoService.hasValidTokens
    ) {
      return true;
    }
    return false;
  }
}
