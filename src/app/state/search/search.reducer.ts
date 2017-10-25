import { SearchSetQueryActionType } from './search.actions';
import { SearchState } from './SearchState';
import { ActionWithPayload } from '../ActionWithPayload';

const initialState: SearchState = {
    query: ''
};

export function searchReducer (state = initialState, action: ActionWithPayload<string>) {
    switch (action.type) {
        case SearchSetQueryActionType:
            return Object.assign(state, {
                query: action.payload
            });
        default: return state;
    }
}
