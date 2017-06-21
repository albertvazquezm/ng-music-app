import { ListResponse } from './../../entities/spotify/listResponse';
import { Artist } from './../../entities/spotify/artist';
import { SpotifyHttpService } from './spotifyHttp.service';
import { ApplicationConstants } from './../../constants/application.constants';
import { SpotifyApiConstants } from './../../constants/spotifyApi.constants';
import { Track } from '../../entities/spotify/track';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import * as Rx from 'rxjs';

@Injectable()
export class PersonalizationSpotifyApiService {
    constructor(
        private _spotifyHttpService: SpotifyHttpService,
        private _spotifyApiConstants: SpotifyApiConstants
    ){}

    public getUserTopTracks(limit = 50): Rx.Observable<ListResponse<Track>> {
        return this._spotifyHttpService.get<ListResponse<Track>>(`${this._spotifyApiConstants.userTopTracksEndpoint}`, {
            search: {
                limit
            }
        });
    }

    public getUserTopArtists(): Rx.Observable<ListResponse<Artist>> {
        return this._spotifyHttpService.get<ListResponse<Artist>>(`${this._spotifyApiConstants.userTopArtistsEndpoint}`);
    }
}