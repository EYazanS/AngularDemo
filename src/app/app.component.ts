import { AuthService } from './auth/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularDemo';

  /**
   *
   */

  isAuth = false;

  constructor(private authService: AuthService) {
    this.authService.isAuth.subscribe(result => this.isAuth = result);
  }

  logout(): void {
    this.authService.logout();
  }
}
