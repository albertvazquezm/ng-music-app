import { PlayerActions } from './../../state/player/player.actions';
import { PlayerState } from './../../state/player/PlayerState';
import { PlayerReproducingState } from './../../state/player/playerReproducingState';
import { PersonalizationSpotifyApiService } from './../../services/spotify/personalization.api.service';
import { Track } from '../../entities/spotify/track';
import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardSmartComponent {

  public userTopTracks: Rx.Observable<Track[]>;
  public playerReproducingState: Rx.Observable<PlayerReproducingState>;
  public currentPlayingTrackId: Rx.Observable<string>;

  constructor(
    private _personalizationSpotifyApiService: PersonalizationSpotifyApiService,
    private _playerStore: Store<any>
  ) {}

  ngOnInit() {
    this.userTopTracks = this._personalizationSpotifyApiService.getUserTopTracks().map(response => response.items);

    // TODO: Try to make it work using select
    this.playerReproducingState = this._playerStore.map(s => s.player && s.player.reproducingState);
    this.currentPlayingTrackId = this._playerStore.map(s => s.player).map((state: PlayerState) => state.id);
  }

  public onClickOnTrack(track: Track) {
    this._playerStore.dispatch(PlayerActions.play(track));
  }

  public onClickOnResume() {
    this._playerStore.dispatch(PlayerActions.resume());
  }

  public onClickOnPause() {
    this._playerStore.dispatch(PlayerActions.pause());
  }
}
