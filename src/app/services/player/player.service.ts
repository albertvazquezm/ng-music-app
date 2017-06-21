import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
    private _currentAudio: HTMLAudioElement;

    public play(src: string) {
        if (this._currentAudio) {
            this.pause();
        }
        if(src) {
            this._currentAudio = new Audio(src);
            this._currentAudio.play();
        }
    }

    public pause() {
        this._currentAudio.pause();
    }

    public resume() {
        if(this._currentAudio) {
            this._currentAudio.play();
        }
    }
}
