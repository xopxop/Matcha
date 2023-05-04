import { Injectable } from "@angular/core";
import { AccountNameService } from "./account-name.service";

@Injectable({
  providedIn: 'root'
}) export class SessionTokenService {
  sessionTokenKey = 'mat-cha-access-token';
  sessionTokenExpiryKey = 'mat-cha-expires-at';
  sessionIdTokenKey = 'mat-cha-id-token';

  constructor(
    private accountNameService : AccountNameService
  ) {}

  get accountName(): string | null {
    return sessionStorage.getItem(this.sessionTokenKey);
  }

  set sessionToken(value: string | null) {
    if (!value) {
      sessionStorage.removeItem(this.sessionTokenKey);
    } else {
      sessionStorage.setItem(this.sessionTokenKey, value);
    }
  }

  get sessionTokenExpiry(): string | null {
    return sessionStorage.getItem(this.sessionTokenExpiryKey);
  }

  set sessionTokenExpiry(value: string | null) {
    if (!value) {
      sessionStorage.removeItem(this.sessionTokenExpiryKey);
    } else {
      sessionStorage.setItem(this.sessionTokenExpiryKey, value);
    }
  }

  get sessionIdToken(): string | null {
    return sessionStorage.getItem(this.sessionIdTokenKey);
  }

  set sessionIdToken(value: string | null) {
    if (!value) {
      sessionStorage.removeItem(this.sessionIdTokenKey);
    } else {
      sessionStorage.setItem(this.sessionIdTokenKey, value);
    }
  }
}