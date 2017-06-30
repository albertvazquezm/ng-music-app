import { SpotifyAuthenticationSuccessResponse } from './../../app/services/authentication/spotifyAuthenticationSuccessResponse';

export class AuthenticationServiceStub {
    public onAuthenticateUsingSpotifySuccess({expires_in, access_token, token_type}: SpotifyAuthenticationSuccessResponse) {}
}
