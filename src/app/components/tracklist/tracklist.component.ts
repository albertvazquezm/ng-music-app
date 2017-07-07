import { Track } from './../../entities/spotify/track';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'music-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss']
})
export class TracklistDumbComponent {

  @Input() tracks: Track[];
  @Input() currentPlayingTrackId: string;
  @Output('onClickOnTrack') _onClickOnTrack = new EventEmitter<Track>();

  public onClickOnTrack(track: Track) {
    this._onClickOnTrack.emit(track);
  }
}
