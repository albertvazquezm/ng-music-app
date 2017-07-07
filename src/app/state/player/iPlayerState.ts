import { PlayerReproducingState } from './playerReproducingState';

export interface IPlayerState {
    src: string;
    reproducingState: PlayerReproducingState;
    id: string;
}