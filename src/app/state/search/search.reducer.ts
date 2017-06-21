import { SearchSetQueryActionType } from './search.actions';
import { ISearchState } from './iSearchState';
import { Action } from '@ngrx/store';

const initialState: ISearchState = {
    query: ''
};

export function searchReducer (state = initialState, action: Action) {
    switch (action.type) {
        case SearchSetQueryActionType:
            return Object.assign(state, {
                query: action.payload.query
            });
        default: return state;
    }
}
