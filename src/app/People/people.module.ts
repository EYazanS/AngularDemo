import { effects } from './store/effects/index';
import { EffectsModule } from '@ngrx/effects';
import { PeopleService } from './people.service';
import { reducers } from './store/reducers/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('people', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    PeopleService
  ]
})
export class PeopleModule { }
