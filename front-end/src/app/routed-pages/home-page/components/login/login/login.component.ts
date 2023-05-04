import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ILoginData } from '../../../models/login-data.interface';
import { AuthService } from '../../../authentication-temp2/login/services/authentication.service';
import { NavigationService } from '../../../../../core/navigation/navigation.service';

@Component({
  selector: 'matcha-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LogInFormComponent implements OnInit {
  constructor(
    private readonly authService: AuthService,
    private readonly navService: NavigationService
  ) {}

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmit() {
    const loginData: ILoginData = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
      // need to add rememberMe
      rememberMe: false,
    };
    this.authService.login(loginData).subscribe({
      next: () => this.loginSucceeded(),
      error: () => this.loginFailed(),
    });
  }

  private loginSucceeded(): void {
    this.navService.navigateTo('passed');
  }

  private loginFailed(): void {
    this.navService.navigateTo('failed');
  }
}
