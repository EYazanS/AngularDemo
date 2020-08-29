import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { effects } from './store/effects/index';
import { EffectsModule } from '@ngrx/effects';
import { PeopleService } from './people.service';
import { reducers } from './store/reducers/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PeopleGridComponent } from './people-grid/people-grid.component';
import { PeopleFormComponent } from './people-form/people-form.component';
import { MatTableModule } from '@angular/material/table';
import { TokenInterceptorService } from '../token-interceptor.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    PeopleGridComponent,
    PeopleFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    StoreModule.forFeature('people', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    PeopleService
  ]
})
export class PeopleModule { }
