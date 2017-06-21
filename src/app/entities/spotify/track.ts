import { AlbumSimplified } from './albumSimplified';

export interface Track {
    name: string;
    popularity: number;
    album: AlbumSimplified;
    duration_ms: number;
    preview_url: string;
}