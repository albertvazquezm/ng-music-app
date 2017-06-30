import { Injectable } from '@angular/core';
import { AuthenticationService } from './../services/authentication/authentication.service';
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import * as QueryString from 'query-string';

@Injectable()
export class SpotifyAuthenticationRedirectGuard implements CanActivate {
    constructor(
        private _authenticationService: AuthenticationService,
        private _router: Router
    ) {}
    public canActivate(route: ActivatedRouteSnapshot) {
        const spotifyRedirectParams = QueryString.parse(route.fragment);
        if (spotifyRedirectParams.access_token) {
            this._authenticationService.onAuthenticateUsingSpotifySuccess({
                access_token: spotifyRedirectParams.access_token,
                expires_in: spotifyRedirectParams.expires_in,
                token_type: spotifyRedirectParams.token_type
            });
            this._router.navigate(['/']);
            return false;
        } else {
            return true;
        }
    }
}