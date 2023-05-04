import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(private readonly router: Router) {}

  public navigateTo(url: string) {
    this.router.navigate([`/${url}`]);
  }
}
