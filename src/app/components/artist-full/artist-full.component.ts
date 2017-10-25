import { Observable } from 'rxjs/Observable';
import { PlayerActions } from './../../state/player/player.actions';
import { PlayerState } from './../../state/player/PlayerState';
import { Store } from '@ngrx/store';
import { TrackListResponse } from './../../entities/spotify/trackListResponse';
import { Track } from './../../entities/spotify/track';
import { Artist } from './../../entities/spotify/artist';
import { ArtistSpotifyApiService } from './../../services/spotify/artist.api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Rx from 'rxjs';

@Component({
  templateUrl: './artist-full.component.html',
  styleUrls: ['./artist-full.component.scss']
})
export class ArtistFullSmartComponent implements OnInit {

  public artist: Artist;
  public artistTopTracks: Track[];
  public currentPlayingTrackId: Rx.Observable<string>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _artistSpotifyApiService: ArtistSpotifyApiService,
    private _playerStore: Store<any>
  ) {}

  ngOnInit() {
    const artistId = this._activatedRoute.snapshot.params.id;
    this._artistSpotifyApiService.getArtist(artistId).subscribe((artist: Artist) => {
      this.artist = artist;
    });
    this._artistSpotifyApiService.getArtistTopTracks(artistId).map((r: TrackListResponse) => r.tracks).subscribe((tracks: Track[]) => {
      this.artistTopTracks = tracks;
    });
    this.currentPlayingTrackId = this._playerStore.map(s => s.player).map((state: PlayerState) => state.id);
  }

  public onClickOnTrack(track: Track) {
    this._playerStore.dispatch(PlayerActions.play(track));
  }
}
