import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {

  constructor(
    private readonly accountService: AccountService,
  ) { }

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    passWord: new FormControl()
  });

  ngOnInit(): void {
  }

  onSubmit() {
    const logInAccount: LogInAccount = {
      userName: this.loginForm.get('userName')?.value,
      password: this.loginForm.get('passWord')?.value
    };
    this.accountService.login(logInAccount.userName, logInAccount.password);
  }
}

interface LogInAccount {
  userName: string,
  password: string
}