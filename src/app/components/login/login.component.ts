import { AuthenticationService } from './../../services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginSmartComponent {

  constructor(
    private _authenticationService: AuthenticationService
  ) {}

  public onClickOnLoginUsingSpotify() {
    this._authenticationService.authenticateUsingSpotify();
  }
}