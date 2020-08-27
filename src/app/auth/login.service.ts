import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, Subject } from 'rxjs';
import { AuthModel } from './login/Models/AuthModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: Subject<boolean> = new Subject();

  public jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {
    this.setAuthState(this.isAuthenticated());
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');    // Check whether the token is expired and return
    // true or false
    const result = !this.jwtHelper.isTokenExpired(token);
    this.setAuthState(result);
    if (!result) {
      this.logout();
    }
    return result;
  }

  login(model: AuthModel): any {
    return this.http.post('https://localhost:5001/Users/authenticate', model, { responseType: 'text' });
  }

  logout(): any {
    localStorage.removeItem('token');
    this.setAuthState(false);
  }

  setAuthState(state: boolean) {
    this.isAuth.next(state);
  }
}
