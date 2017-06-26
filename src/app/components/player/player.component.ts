import { IPlayerState } from './../../state/player/iPlayerState';
import { Store } from '@ngrx/store';
import { PlayerReproducingState } from './../../state/player/playerReproducingState';
import * as Rx from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'music-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerDumbComponent {

  @Input() reproducingState: PlayerReproducingState;
  @Output() onClickOnResume = new EventEmitter();
  @Output() onClickOnPause = new EventEmitter();

  public PlayerReproducingState = PlayerReproducingState;

  public onClickOnPlayerButton() {
    if(this.reproducingState === PlayerReproducingState.Paused) {
      this.onClickOnResume.emit();
    } else if(this.reproducingState === PlayerReproducingState.Playing) {
      this.onClickOnPause.emit();
    }
  }
}
