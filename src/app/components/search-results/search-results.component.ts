import { Observable } from 'rxjs/Observable';
import { PlayerActions } from './../../state/player/player.actions';
import { IPlayerState } from './../../state/player/iPlayerState';
import { Store } from '@ngrx/store';
import { Artist } from './../../entities/spotify/artist';
import { Track } from './../../entities/spotify/track';
import { SearchResponse } from './../../entities/spotify/searchResponse';
import { SearchSpotifyApiService } from './../../services/spotify/search.api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemType } from '../../services/spotify/itemType';
import * as Rx from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsSmartComponent {

  public tracks: Track[];
  public artists: Artist[];
  public query: string;
  public currentPlayingTrackId: Rx.Observable<string>;

  private _searchQueryHttpRequest: Rx.Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _searchSpotifyApiService: SearchSpotifyApiService,
    private _playerStore: Store<any>
  ) {
    this._activatedRoute.queryParamMap.map((params: ParamMap) => params.get('q')).subscribe((query) => this._onQueryChanged(query));
  }

  ngOnInit() {
      this.currentPlayingTrackId = this._playerStore.map(s => s.player).map((state: IPlayerState) => state.id);
  }

  public onClickOnTrack(track: Track) {
    this._playerStore.dispatch(PlayerActions.play(track));
  }

  private _onQueryChanged(query: string) {
    this.query = query;
    if (query.length > 2) {
      this._guardAgainsMultipleSearchRequests();
      this._searchQueryHttpRequest = this._searchSpotifyApiService
        .search([ItemType.Track, ItemType.Artist], query, 10)
        .subscribe((response: SearchResponse) => {
          this.artists = response.artists.items;
          this.tracks = response.tracks.items;
        });
    }
  }

  private _guardAgainsMultipleSearchRequests() {
    if(this._searchQueryHttpRequest) {
      this._searchQueryHttpRequest.unsubscribe();
    }
  }
}