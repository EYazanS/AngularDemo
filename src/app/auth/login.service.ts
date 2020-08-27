import { Observable } from 'rxjs';
import { AuthModel } from './login/Models/AuthModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  login(model: AuthModel): any {
    return this.http.post('https://localhost:5001/Users/authenticate', model);
  }
}
