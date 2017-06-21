import { Injectable } from '@angular/core';
import { ApplicationConstants } from './../constants/application.constants';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class SpotifyAuthenticationValidGuard implements CanActivate {

    constructor(
        private _applicationConstants: ApplicationConstants,
        private _router: Router
    ){}

    public canActivate() {
        if(window.sessionStorage.getItem(this._applicationConstants.authenticationTokenKey)) {
            return true;
        } else {
            this._router.navigate(['/login']);
            return false;
        }
    }
}