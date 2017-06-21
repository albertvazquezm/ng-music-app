import { PlayerPlayActionType, PlayerPauseActionType, PlayerResumeActionType } from './player.actions';
import { IPlayerState } from './iPlayerState';
import { PlayerReproducingState } from './playerReproducingState';
import { Action } from '@ngrx/store';

const initialState: IPlayerState = {
    src: '',
    reproducingState: PlayerReproducingState.None
};

export function playerReducer (state = initialState, action: Action) {
    switch (action.type) {
        case PlayerPlayActionType:
            return Object.assign(state, {
                src: action.payload.src,
                reproducingState: action.payload.src ? PlayerReproducingState.Playing : PlayerReproducingState.None
            });
        case PlayerPauseActionType:
            return Object.assign(state, {
                reproducingState: PlayerReproducingState.Paused
            });
        case PlayerResumeActionType:
            return Object.assign(state, {
                reproducingState: PlayerReproducingState.Playing
            });
        default: return state;
    }
}
