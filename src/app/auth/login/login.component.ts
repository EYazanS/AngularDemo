import { LoginService } from './../login.service';
import { AuthModel } from './Models/AuthModel';
import { Component, OnInit } from '@angular/core';

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

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service
      .login(this.model)
      .subscribe(token => {
        console.log('token ', token);
        localStorage.setItem('token', token);
      });
  }

}
