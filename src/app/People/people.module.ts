import { reducers } from './store/reducers/index';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('people', reducers)
  ]
})
export class PeopleModule { }
