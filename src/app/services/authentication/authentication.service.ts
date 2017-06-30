import { StorageService } from './../storage/storage.service';
import { SpotifyAuthenticationSuccessResponse } from './spotifyAuthenticationSuccessResponse';
import { environment } from './../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService {

    constructor(
        private _storageService: StorageService
    ) {}

    private _getCompleteRedirectUri(redirectUri: string): string {
        return window.location.origin + redirectUri;
    }
    private _getSpotifyAuthenticationUrl(): string {
        const spotifyConfig = environment.authentication.spotify;
        return `${spotifyConfig.authenticationUrl}?client_id=${spotifyConfig.clientId}&redirect_uri=${this._getCompleteRedirectUri(spotifyConfig.redirectUri)}&response_type=${spotifyConfig.responseType}&scope=${encodeURIComponent(spotifyConfig.scopes)}`;
    }

    public authenticateUsingSpotify() {
        window.location.href = this._getSpotifyAuthenticationUrl();
    }
    public onAuthenticateUsingSpotifySuccess({expires_in, access_token, token_type}: SpotifyAuthenticationSuccessResponse) {
        this._storageService.storeAuthenticationDetails(access_token, token_type);
    }
}