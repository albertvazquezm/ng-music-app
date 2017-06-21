import { TrackListResponse } from './../../entities/spotify/trackListResponse';
import { Track } from './../../entities/spotify/track';
import { Artist } from './../../entities/spotify/artist';
import { SpotifyHttpService } from './spotifyHttp.service';
import { ApplicationConstants } from './../../constants/application.constants';
import { SpotifyApiConstants } from './../../constants/spotifyApi.constants';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as Rx from 'rxjs';

@Injectable()
export class ArtistSpotifyApiService {
    constructor(
        private _spotifyHttpService: SpotifyHttpService,
        private _spotifyApiConstants: SpotifyApiConstants
    ){}

    public getArtist(artistId: string): Rx.Observable<Artist> {
        return this._spotifyHttpService.get<Artist>(`${this._spotifyApiConstants.artistEndpoint}/${artistId}`);
    }

    public getArtistTopTracks(artistId: string): Rx.Observable<TrackListResponse> {
        return this._spotifyHttpService.get<TrackListResponse>(
            this._spotifyApiConstants.artistTopTracksEndpoint.replace('{id}', artistId),
            {
                search: {
                    country: 'ES'
                }
            }
        );
    }
}