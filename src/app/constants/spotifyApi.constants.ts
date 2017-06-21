export class SpotifyApiConstants {
    public authorizationHeaderName = 'Authorization';
    public userTopTracksEndpoint = 'https://api.spotify.com/v1/me/top/tracks';
    public userTopArtistsEndpoint = 'https://api.spotify.com/v1/me/top/artists';
    public artistEndpoint = 'https://api.spotify.com/v1/artists';
    public artistTopTracksEndpoint = 'https://api.spotify.com/v1/artists/{id}/top-tracks'
    public searchEndpoint = 'https://api.spotify.com/v1/search';
}