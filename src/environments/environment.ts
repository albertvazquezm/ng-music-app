// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  authentication: {
    spotify: {
      authenticationUrl: 'https://accounts.spotify.com/authorize',
      clientId: '6cb8cb6350a242a5b913da17bd72eafb',
      responseType: 'token',
      redirectUri: '/login',
      scopes: 'playlist-read-private playlist-read-collaborative playlist-modify-public playlist-modify-private user-library-read user-top-read user-read-email user-read-private'
    }
  }
};
