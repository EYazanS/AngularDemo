import { AuthService } from './../login.service';
import { AuthModel } from './Models/AuthModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: AuthModel = {
    username: '',
    password: ''
  };

  constructor(private service: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service
      .login(this.model)
      .subscribe(token => {
        localStorage.setItem('token', token);
        this.router.navigate(['people']);
        this.service.setAuthState(true);
      });
  }

}
