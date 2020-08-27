import * as PeopleActions from '../actions/people.actions';
import { Person } from '../../Models/PersonResource';

export interface State {
    data: Person[];
    loaded: boolean;
    loading: boolean;
}

export const initialState: State = {
    data: [{ fullName: 'Test', dateOfBirth: new Date('13/8/1996') }],
    loaded: false,
    loading: false,
};

export function reducer(state: State = initialState, action: PeopleActions.PeopleActions) {
    switch (action.type) {
        case PeopleActions.loadPeople:
            return { ...state, loading: true };
            break;

        case PeopleActions.loadPeopleFail:
            return { ...state, loading: false, loaded: false };
            break;

        case PeopleActions.loadPeopleSuccess:
            return { ...state, loading: false, loaded: true };
            break;

        default:
            break;
    }
}
