export const environment = {
  production: true,
  authentication: {
    spotify: {
      authenticationUrl: 'https://accounts.spotify.com/authorize',
      clientId: '6cb8cb6350a242a5b913da17bd72eafb',
      responseType: 'token',
      redirectUri: '/ng-music-app/login',
      scopes: 'playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-read user-top-read user-read-email user-read-private'
    }
  }
};
