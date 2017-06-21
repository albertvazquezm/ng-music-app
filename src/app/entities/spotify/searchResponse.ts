import { ListResponse } from './listResponse';
import { Track } from './track';
import { Artist } from './artist';

export interface SearchResponse {
    artists?: ListResponse<Artist>;
    tracks?: ListResponse<Track>;
}
