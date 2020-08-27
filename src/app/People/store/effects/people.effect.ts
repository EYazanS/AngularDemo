import { PeopleService } from './../../people.service';

import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as peopleActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PeopleEffects {
    constructor(
        private actions: Actions,
        private service: PeopleService
    ) {

    }

    @Effect()
    loadPeople = this.actions.pipe(
        ofType(peopleActions.loadPeople),
        switchMap(() => this.service.GetPeople().pipe(
            map(people => new peopleActions.LoadPeopleSuccess(people)),
            catchError(err => of(new peopleActions.LoadPeopleFail(err)))
        ))
    );
}
