import { ListResponse } from './../../entities/spotify/listResponse';
import { PersonalizationSpotifyApiService } from './../../services/spotify/personalization.api.service';
import { Artist } from './../../entities/spotify/artist';
import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'user-top-artists-grid',
  template: '<music-artists-grid [artists]="userTopArtists | async"></music-artists-grid>',
  styleUrls: ['./user-top-artists-grid.component.scss']
})
export class UserTopArtistsGridComponent {

  constructor(
    private _personalizationSpotifyApiService: PersonalizationSpotifyApiService
  ){}

  public userTopArtists: Rx.Observable<Artist[]> = this._personalizationSpotifyApiService.getUserTopArtists().map((response: ListResponse<Artist>) => response.items);

}
