import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss'],
})
export class LogInFormComponent implements OnInit {
  returnUrl: string;

  constructor(
    private readonly accountService: AccountService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmit() {
    const logInAccount: LogInAccount = {
      userName: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    };
    this.accountService
      .login(logInAccount.userName, logInAccount.password)
      .subscribe({
        next: (data) => {
          this.router.navigate([this.returnUrl]);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}

interface LogInAccount {
  userName: string;
  password: string;
}
