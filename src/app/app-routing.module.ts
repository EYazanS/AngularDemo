import { PeopleFormComponent } from './People/people-form/people-form.component';
import { PeopleGridComponent } from './People/people-grid/people-grid.component';
import { PeopleModule } from './People/people.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleDetailsComponent } from './People/people-details/people-details.component';

const routes: Routes = [
  {
    path: 'people',
    children: [
      { path: '', component: PeopleGridComponent },
      { path: 'add', component: PeopleFormComponent },
      { path: 'edit/:id', component: PeopleFormComponent },
      { path: ':id', component: PeopleDetailsComponent }
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
