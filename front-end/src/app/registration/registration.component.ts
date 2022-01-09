import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  isEmailAddressFieldFocused = false;
  isUserNameFieldFocused = false;
  isFirstNameFieldFocused = false;
  isLastNameFieldFocused = false;
  isPassWordFieldFocused = false;

  get nameErrorTooltip(): string {
    var message = '';
    if (this.form.get('userName')?.hasError('required')) {
      message += 'This field is required!';
    } else if (this.form.get('userName')?.hasError('minlength')) {
      message += 'Minumum length is 5!';
    } else if (this.form.get('userName')?.hasError('maxlength')) {
      message += 'Maximun length is 10!';
    }
    return message;
  }

  get emailErrorTooltip(): string {
    var message = '';
    if (this.form.get('emailAddress')?.hasError('required')) {
      message += 'Email Address is required!';
    } else if (this.form.get('emailAddress')?.hasError('email')) {
      message += 'Please enter a valid email address!';
    }
    return message;
  }

  get passWordErrorTooltip(): string {
    var message = '';
    if (this.form.get('passWord')?.hasError('required')) {
      message += 'Password is required!';
    } else if (this.form.get('passWord')?.hasError('minlength')) {
      message += 'Minumum length is 5';
    } else if (this.form.get('passWord')?.hasError('maxlength')) {
      message += 'Maximun length is 10';
    }
    return message;
  }

  form: FormGroup = new FormGroup({
    emailAddress: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
    passWord: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(10),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const account: Account = {
      emailAddress: this.form.get('emailAddress')?.value,
      userName: this.form.get('userName')?.value,
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      passWord: this.form.get('passWord')?.value,
    };
    console.log(account);
  }

  get isValidForm(): boolean {
    return (
      !!!this.form.get('emailAddress')?.errors &&
      !!!this.form.get('userName')?.errors &&
      !!!this.form.get('firstName')?.errors &&
      !!!this.form.get('lastName')?.errors &&
      !!!this.form.get('passWord')?.errors
    );
  }
}

interface Account {
  emailAddress: string;
  userName: string;
  firstName: string;
  lastName: string;
  passWord: string;
}
