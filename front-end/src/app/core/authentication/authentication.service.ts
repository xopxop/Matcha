import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginData } from '../../../authentication-temp/models/login-data.interface';
import { IRegisterData } from '../../../authentication-temp/models/register-data.interface';
import { IToken } from '../../../authentication-temp/models/token.interface';
import { LoginService } from './login.service';
import { RegisterService } from '../../registation/services/register.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn = false;

  constructor(
    private readonly registerService: RegisterService,
    private readonly loginService: LoginService

    // private loginService: LoginService,
    // private rememberMeService: RememberMeService,
    // private registerService: RegisterService,
    // private resetPasswordService: ResetPasswordService,
    // private changePasswordService: ChangePasswordService,
    // private sessionTokenService: SessionTokenService,
    // private claimsService: ClaimsService,
    // private accountNameService: AccountNameService,
    // private i18nSettingsService: I18nSettingsService,
    // private userService: UserService

  ) {}

  login(loginData: ILoginData): Observable<IToken> {
    return this.loginService.login(loginData);
  }

  register(registerData: IRegisterData): Observable<IToken> {
    return this.registerService.register(registerData);
  }

  extractToken(httpResponse: HttpResponse<any>): IToken {
    const tokenValue = httpResponse.headers.get('token');
    if (!tokenValue) {
      throw new Error('missing token value');
    }
    const tokenExpirySeconds = httpResponse.headers.get('expiry');
    if (!tokenExpirySeconds) {
      throw new Error('token Expiry value is missing');
    }
    const duration = Number.parseInt(tokenExpirySeconds as string, 10);
    const token: IToken = {
      value: tokenValue,
      expiry: duration.toString(),
    };

    // this.
    return token;
  }
}
