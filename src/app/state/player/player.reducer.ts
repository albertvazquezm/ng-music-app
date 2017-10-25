import { PlayerPlayActionType, PlayerPauseActionType, PlayerResumeActionType } from './player.actions';
import { PlayerState } from './PlayerState';
import { PlayerReproducingState } from './playerReproducingState';
import { Action } from '@ngrx/store';
import { ActionWithPayload } from '../ActionWithPayload';
import { Track } from '../../entities/spotify/track';

const initialState: PlayerState = {
    src: '',
    id: null,
    reproducingState: PlayerReproducingState.None
};

export function playerReducer (state = initialState, action: ActionWithPayload<any>) {
    switch (action.type) {
        case PlayerPlayActionType: return playerPlayReducer(state, action.payload);
        case PlayerPauseActionType: return playerPauseReducer(state);
        case PlayerResumeActionType: return playerResumeReducer(state);
        default: return state;
    }
}

const playerPlayReducer = (state: PlayerState, payload: Track): PlayerState => {
    return Object.assign(state, {
        src: payload.preview_url,
        id: payload.id,
        reproducingState: payload.preview_url ? PlayerReproducingState.Playing : PlayerReproducingState.None
    });
}

const playerPauseReducer = (state: PlayerState): PlayerState => {
    return Object.assign(state, {
        reproducingState: PlayerReproducingState.Paused
    });
}

const playerResumeReducer = (state: PlayerState): PlayerState => {
    return Object.assign(state, {
        reproducingState: PlayerReproducingState.Playing
    });
}
