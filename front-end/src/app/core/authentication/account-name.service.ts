import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
}) export class AccountNameService {
  accountNameKey = 'mat-cha-account-name';

  get accountName(): string | null {
    return sessionStorage.getItem(this.accountNameKey);
  }

  set accountName(value: string | null) {
    if (!value) {
      sessionStorage.removeItem(this.accountNameKey);
    } else {
      sessionStorage.setItem(this.accountNameKey, value);
    }
  }
}