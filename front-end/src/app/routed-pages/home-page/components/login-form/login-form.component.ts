import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ILoginData } from 'src/app/routed-pages/home-page/models/login-data.interface';
import { AuthService } from 'src/app/authentication-temp2/login/services/authentication.service';
import { NavigationService } from 'src/app/core/navigation/navigation.service';

@Component({
  selector: 'matcha-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
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
