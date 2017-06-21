import { Action } from '@ngrx/store';
import * as uuid from 'uuid';

export const PlayerPlayActionType = uuid.v4();
export const PlayerPauseActionType = uuid.v4();
export const PlayerResumeActionType = uuid.v4();

export class PlayerActions {
    static play(src: string): Action {
        return {
            type: PlayerPlayActionType,
            payload: {
                src
            }
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
