import { Person } from './../../Models/PersonResource';
import { Action } from '@ngrx/store';

export const loadPeople = '[People] load People';
export const loadPeopleFail = '[People] People Fail';
export const loadPeopleSuccess = '[People] load People success';

export class LoadPeople implements Action {
    readonly type = loadPeople;
}

export class LoadPeopleFail implements Action {
    readonly type = loadPeopleFail;

    constructor(public payload: any) {

    }
}

export class LoadPeopleSuccess implements Action {
    readonly type = loadPeopleSuccess;

    constructor(public payload: Person[]) {

    }
}

export type PeopleActions = LoadPeople | LoadPeopleFail | LoadPeopleSuccess;
