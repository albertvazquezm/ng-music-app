import { Track } from './../../entities/spotify/track';
import { Action } from '@ngrx/store';
import * as uuid from 'uuid';
import { ActionWithPayload } from '../ActionWithPayload'

export const PlayerPlayActionType = uuid.v4();
export const PlayerPauseActionType = uuid.v4();
export const PlayerResumeActionType = uuid.v4();

export class PlayerActions {
    static play(track: Track): ActionWithPayload<Track> {
        return {
            type: PlayerPlayActionType,
            payload: track
        }
    }
    static pause(): Action {
        return {
            type: PlayerPauseActionType
        }
    }
    static resume(): Action {
        return {
            type: PlayerResumeActionType
        }
    }
}
