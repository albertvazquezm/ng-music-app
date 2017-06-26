import { PlayerService } from './../../services/player/player.service';
import { Action } from '@ngrx/store';
import { PlayerPlayActionType, PlayerPauseActionType, PlayerResumeActionType, PlayerActions } from './player.actions';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import * as Rx from 'rxjs';

@Injectable()
export class PlayerEffects {

  constructor(
    private actions: Actions,
    private _playerService: PlayerService
  ) {}

  @Effect() playerPlayAction  = this.actions
      .ofType(PlayerPlayActionType)
      .switchMap(({payload}: Action) => 
        this._playerService.play(payload.preview_url).map(() => PlayerActions.pause()));

    @Effect({dispatch: false}) playerStopAction  = this.actions
      .ofType(PlayerPauseActionType)
      .do(() => {
        this._playerService.pause();
      })

    @Effect({dispatch: false}) playerResumeAction  = this.actions
      .ofType(PlayerResumeActionType)
      .do(() => {
        this._playerService.resume();
      })
}
