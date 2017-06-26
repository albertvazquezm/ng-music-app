import { Router } from '@angular/router';
import { Artist } from './../../entities/spotify/artist';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'music-artists-grid',
  templateUrl: './artists-grid.component.html',
  styleUrls: ['./artists-grid.component.scss']
})
export class ArtistsGridDumbComponent {

  @Input() artists: Artist[];

  constructor(
    private _router: Router
  ) { }

  public onClickOnArtist(artistId: string) {
    this._router.navigate(['/artist', artistId]);
  }
  
}