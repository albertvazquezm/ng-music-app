import { PlayerReproducingState } from './playerReproducingState';

export interface PlayerState {
    src: string;
    reproducingState: PlayerReproducingState;
    id: string;
}