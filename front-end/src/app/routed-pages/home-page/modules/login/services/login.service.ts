import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginData } from '../../../models/login-data.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private loginPath = 'authenticate/login';

  constructor(private readonly http: HttpClient) {}

  login(loginData: ILoginData): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: loginData.username + loginData.password,
    });
    const requestUrl = 'http://localhost:3000/' + this.loginPath;
    return this.http.post(requestUrl, null, { headers });
  }
}
