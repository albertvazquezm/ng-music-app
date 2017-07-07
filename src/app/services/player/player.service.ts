import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable()
export class PlayerService {
    private _currentAudio: HTMLAudioElement;

    public play(src: string): Rx.Observable<{}> {
        return Rx.Observable.create((obs: Rx.Observer<{}>) => {
            if (this._currentAudio) {
                this.pause();
            }
            if(src) {
                this._currentAudio = new Audio(src);
                this._currentAudio.play();
                this._currentAudio.onended = () => {
                    obs.next({});
                    obs.complete();
                }
            } else {
                obs.next({});
                obs.complete();
            }
        });
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
