import { PlayerService } from './../../services/player/player.service';
import { Action } from '@ngrx/store';
import { PlayerPlayActionType, PlayerPauseActionType, PlayerResumeActionType } from './player.actions';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerEffects {

  constructor(
    private actions: Actions,
    private _playerService: PlayerService
  ) {}

  @Effect({dispatch: false}) playerPlayAction  = this.actions
      .ofType(PlayerPlayActionType)
      .do(({payload}: Action) => {
        payload.src && this._playerService.play(payload.src);
      })

    @Effect({dispatch: false}) playerStopAction  = this.actions
      .ofType(PlayerPauseActionType)
      .do(({payload}: Action) => {
        this._playerService.pause();
      })

    @Effect({dispatch: false}) playerResumeAction  = this.actions
      .ofType(PlayerResumeActionType)
      .do(() => {
        this._playerService.resume();
      })
}
