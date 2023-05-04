import { Injectable } from '@angular/core';

export interface IClaims {
  loginId: number;
}

@Injectable({
  providedIn: 'root',
})
export class ClaimsService {
  private sessionClaimsObjKey = 'matcha-session-claim-obj';

  constructor() {}

  public set sessionClaims(claims: IClaims | undefined) {
    if (claims) {
      sessionStorage.setItem(this.sessionClaimsObjKey, JSON.stringify(claims));
    } else {
      sessionStorage.removeItem(this.sessionClaimsObjKey);
    }
  }

  public get sessionClaims(): IClaims | undefined {
    const value = sessionStorage.getItem(this.sessionClaimsObjKey);
    if (!value) {
      return undefined;
    }
    return JSON.parse(value);
  }
}
