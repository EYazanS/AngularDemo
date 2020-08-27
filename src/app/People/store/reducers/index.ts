import * as peopleReducers from './people.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface PeopleStoreState {
    people: peopleReducers.State;
}

export const reducers: ActionReducerMap<PeopleStoreState> = {
    people: peopleReducers.reducer
};

export const getPeopleStoreState = createFeatureSelector<PeopleStoreState>('people');

export const getPeopleState = createSelector(getPeopleStoreState, (state: PeopleStoreState) => state.people);

export const getAllPeople = createSelector(getPeopleState, peopleReducers.getPeople);
export const getPeopleLoaded = createSelector(getPeopleState, peopleReducers.getPeopleLoaded);
export const getPeopleLoading = createSelector(getPeopleState, peopleReducers.getPeopleLoading);
