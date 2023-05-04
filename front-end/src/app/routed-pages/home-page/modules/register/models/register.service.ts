import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegisterData } from '../../../authentication-temp/models/register-data.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private registerPath = 'user/register';

  constructor(private http: HttpClient) {}

  public register(data: IRegisterData): Observable<any> {
    const requestUrl = 'http://localhost:3000/' + this.registerPath;
    const requestBody = window.btoa(JSON.stringify(data));

    return this.http.post(requestUrl, requestBody);
  }
}
