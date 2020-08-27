import { JwtHelperService } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    JwtHelperService
  ]
})
export class AuthModule { }
