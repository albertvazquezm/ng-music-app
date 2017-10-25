import { Action } from '@ngrx/store';
import * as uuid from 'uuid';
import { ActionWithPayload } from '../ActionWithPayload';

export const SearchSetQueryActionType = uuid.v4();

export class SearchActions {
    static setQuery(query: string): ActionWithPayload<string> {
        return {
            type: SearchSetQueryActionType,
            payload: query
        }
    }
}
