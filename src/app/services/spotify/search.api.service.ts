import { SearchResponse } from './../../entities/spotify/searchResponse';
import { ListResponse } from './../../entities/spotify/listResponse';
import { SpotifyHttpService } from './spotifyHttp.service';
import { SpotifyApiConstants } from './../../constants/spotifyApi.constants';
import { Track } from '../../entities/spotify/track';
import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { ItemType } from './itemType';

@Injectable()
export class SearchSpotifyApiService {
    constructor(
        private _spotifyHttpService: SpotifyHttpService,
        private _spotifyApiConstants: SpotifyApiConstants
    ) {}

    private _prepareTypesForApi(types: ItemType[]): string {
        return types.map(t => {
            switch (t) {
                case ItemType.Album: return 'album';
                case ItemType.Track: return 'track';
                case ItemType.Playlist: return 'playlist';
                case ItemType.Artist: return 'artist';
            }
        }).join(',');
    }

    public search(types: ItemType[], query: string, limit?): Rx.Observable<SearchResponse> {
        const preparedTypes = this._prepareTypesForApi(types);
        return this._spotifyHttpService.get<SearchResponse>(`${this._spotifyApiConstants.searchEndpoint}`, {
            search: {
                limit,
                type: preparedTypes,
                q: `*${query}*`
            }
        });
    }
}
