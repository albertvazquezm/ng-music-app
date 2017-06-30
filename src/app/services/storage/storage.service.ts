import { Injectable } from '@angular/core';
import { ApplicationConstants } from './../../constants/application.constants';

@Injectable()
export class StorageService {
    constructor(
        private _applicationConstants: ApplicationConstants
    ) {}

    public storeAuthenticationDetails(accessToken: string, tokenType: string) {
        window.sessionStorage.setItem(this._applicationConstants.authenticationTokenKey, accessToken);
        window.sessionStorage.setItem(this._applicationConstants.authenticationTokenTypeKey, tokenType);
    }

    public clearAuthenticationDetails() {
        window.sessionStorage.removeItem(this._applicationConstants.authenticationTokenKey);
        window.sessionStorage.removeItem(this._applicationConstants.authenticationTokenTypeKey);
    }
}
