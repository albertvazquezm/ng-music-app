import { Router } from '@angular/router';
import { StorageService } from './../storage/storage.service';
import { Injectable } from '@angular/core';
import { ApplicationConstants } from './../../constants/application.constants';
import { SpotifyApiConstants } from './../../constants/spotifyApi.constants';

import {Http, RequestOptionsArgs, Response, XHRBackend, RequestOptions, Headers} from '@angular/http';
import * as Rx from 'rxjs';

@Injectable()
export class SpotifyHttpService extends Http {

    constructor(
        backend: XHRBackend,
        defaultOptions: RequestOptions,
        private _spotifyApiConstants: SpotifyApiConstants,
        private _applicationConstants: ApplicationConstants,
        private _storageService: StorageService,
        private _router: Router
    ) {
        super(backend, defaultOptions);
    }

    private _getSpotifyRequestOptions(): RequestOptionsArgs {
        const headers = new Headers();
        const tokenType = window.sessionStorage.getItem(this._applicationConstants.authenticationTokenTypeKey);
        const token = window.sessionStorage.getItem(this._applicationConstants.authenticationTokenKey);
        headers.append(
            this._spotifyApiConstants.authorizationHeaderName,
            `${tokenType} ${token}`
        );
        return {headers};
    }

    private _spotifyGetMap<T>(res: Response): T {
        return res.json();
    }

    private _onCatch(response: Response) {
        switch (response.status) {
            case 401: this._handleUnauthorised(); break;
        }
        return Rx.Observable.throw('Error requesting a Spotify resource');
    }

    private _handleUnauthorised() {
        this._storageService.clearAuthenticationDetails();
        this._router.navigate(['/login']);
    }

    public get<T>(url: string, options?: RequestOptionsArgs): Rx.Observable<T> {
        return super
            .get(url, Object.assign({}, options, this._getSpotifyRequestOptions()))
            .map(r => this._spotifyGetMap<T>(r))
            .catch(r => this._onCatch(r));
    }
}