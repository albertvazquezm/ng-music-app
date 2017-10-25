import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { SearchSetQueryActionType } from './search.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { ActionWithPayload } from '../ActionWithPayload';

@Injectable()
export class SearchEffects {

  constructor(
    private actions: Actions,
    private _router: Router
  ) {}

  @Effect({dispatch: false}) searchSetQueryAction  = this.actions
      .ofType(SearchSetQueryActionType)
      .do(({payload}: ActionWithPayload<string>) => {
        this._router.navigate(['search'], {
            queryParams: {
                q: payload
            }
        })
      })
}
