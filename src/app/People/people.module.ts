import { effects } from './store/effects/index';
import { EffectsModule } from '@ngrx/effects';
import { PeopleService } from './people.service';
import { reducers } from './store/reducers/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PeopleGridComponent } from './people-grid/people-grid.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleFormComponent } from './people-form/people-form.component';

import {MatTableModule} from '@angular/material/table'; 
import { TokenInterceptorService } from '../token-interceptor.service';

@NgModule({
  declarations: [
    PeopleGridComponent,
    PeopleDetailsComponent,
    PeopleFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
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
