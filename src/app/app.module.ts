import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleGridComponent } from './People/people-grid/people-grid.component';
import { PeopleDetailsComponent } from './People/people-details/people-details.component';
import { PeopleFormComponent } from './People/people-form/people-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleGridComponent,
    PeopleDetailsComponent,
    PeopleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
