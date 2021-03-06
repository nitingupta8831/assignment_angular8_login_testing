import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface UserLoginBody {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.apiEndpoint;
  isLogin = false;

  constructor(
    private http: HttpClient
  ) {}

  getIsLogin() {
    return this.isLogin;
  }

  login(userloginBody: UserLoginBody): Promise<any> {
    
    return new Promise((resolve, reject) => {
      this.http.post(this.baseUrl, userloginBody)
        .toPromise()
        .then((res: BaseResponse) => {
          resolve();
        }).catch((err) => {
          reject(err.error.message);
        });
    });
  }

  logout() {
    this.isLogin = false;
  }
}

export interface BaseResponse {
  code: string;
  message: string;
}
