import { Action } from '@ngrx/store';
import * as uuid from 'uuid';

export const SearchSetQueryActionType = uuid.v4();

export class SearchActions {
    static setQuery(query: string): Action {
        return {
            type: SearchSetQueryActionType,
            payload: {query}
        }
    }
}
