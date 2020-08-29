import { LoginComponent } from './auth/login/login.component';
import { PeopleFormComponent } from './People/people-form/people-form.component';
import { PeopleGridComponent } from './People/people-grid/people-grid.component';
import { PeopleModule } from './People/people.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/guards.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'people',
    canActivate: [AuthGuardService],
    children: [
      { path: '', component: PeopleGridComponent },
      { path: 'add', component: PeopleFormComponent },
      { path: 'edit/:id', component: PeopleFormComponent }
    ]
  }
];

@NgModule({
  imports: [
    PeopleModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
