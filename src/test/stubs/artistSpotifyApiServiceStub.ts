import * as Rx from 'rxjs';
import {Artist} from '../../app/entities/spotify/artist';
import {TrackListResponse} from '../../app/entities/spotify/trackListResponse';
import {artistFullMock} from '../mocks/artistFullMock.spec';
import {trackFullListMock} from '../mocks/trackFullListMock.spec';

export class ArtistSpotifyApiServiceStub {
  getArtist(artistId: string): Rx.Observable<Artist> {
    return Rx.Observable.of(artistFullMock);
  }
  getArtistTopTracks(artistId: string): Rx.Observable<TrackListResponse> {
    return Rx.Observable.of(trackFullListMock);
  }
};
