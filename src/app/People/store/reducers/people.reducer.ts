import * as PeopleActions from '../actions/people.actions';
import { Person } from '../../Models/PersonResource';

export interface State {
    data: Person[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: State = {
    data: [{ fullName: 'Test', dateOfBirth: new Date('08/13/1996'), id: '123' }],
    loaded: false,
    loading: false,
};

export function reducer(state: State = initialState, action: PeopleActions.PeopleActions) {
    switch (action.type) {
        case PeopleActions.loadPeople:
            return { ...state, loading: true };

        case PeopleActions.loadPeopleFail:
            return { ...state, loading: false, loaded: false };

        case PeopleActions.loadPeopleSuccess:
            return { ...state, loading: false, loaded: true };

        default:
            break;
    }

    return state;
}

export const getPeopleLoading = (state: State) => state.loading;
export const getPeopleLoaded = (state: State) => state.loaded;
export const getPeople = (state: State) => state.data;
