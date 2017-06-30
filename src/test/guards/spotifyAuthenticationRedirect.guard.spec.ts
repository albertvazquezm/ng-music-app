import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationServiceStub } from './../stubs/authenticationServiceStub';
import { AuthenticationService } from './../../app/services/authentication/authentication.service';
import { SpotifyAuthenticationRedirectGuard } from './../../app/guards/spotifyAuthenticationRedirect.guard';
import {TestBed, async} from '@angular/core/testing';

const validToken = "BQBQnUH2FfGWW-qOJANutjSiPpmBmWs455t7XvrIoYe34NrYOngj8qrvsYMCTMMs8SeYullri2Kpfuyjvtl9m0jlO79xTBrQd7inqN0a_OMHACw-tlrBdvVCK67CPf6d99ozE_Ey5zIuAouxBP7qgKwRd5ae_R7tyEK82kbEJlfSpQPrfwguoCSPhNolfvLo1wtf8ubMHSW8bKlBZskfVdANRonm4RvRlQZ1xi4I-kOXruUaRyoJDoyX7bPG32_Htq0qPzE0_Dbh0xoCjtCnvPGOej9RdazYSH-u";
const validUrlFragment = `access_token=${validToken}&token_type=Bearer&expires_in=3600`;

fdescribe('Spotify Authentication Redirect Guard', () => {
    let spotifyAuthenticationRedirectGuard;
    let authenticationServiceStub;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [
                SpotifyAuthenticationRedirectGuard,
                {
                   provide: AuthenticationService,
                   useClass: AuthenticationServiceStub
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        spotifyAuthenticationRedirectGuard = TestBed.get(SpotifyAuthenticationRedirectGuard);
        authenticationServiceStub = TestBed.get(AuthenticationService);
    });

    it('should have a canActivate method', () => {
        expect(spotifyAuthenticationRedirectGuard.canActivate).toBeDefined();
    })

    it('should return false if the route contains an access token', () => {
        const canActivateResult = spotifyAuthenticationRedirectGuard.canActivate({
            fragment: validUrlFragment
        });
        expect(canActivateResult).toBeFalsy();
    })

    it('should return true if the route don\'t contain an access token', () => {
        const canActivateResult = spotifyAuthenticationRedirectGuard.canActivate({
            fragment: 'access_token=&token_type=Bearer&expires_in=3600'
        });
        expect(canActivateResult).toBeTruthy();
    })

    it('should call onAuthenticateUsingSpotifySuccess properly', () => {
        spyOn(authenticationServiceStub, 'onAuthenticateUsingSpotifySuccess');
        spotifyAuthenticationRedirectGuard.canActivate({
            fragment: validUrlFragment
        });
        expect(authenticationServiceStub.onAuthenticateUsingSpotifySuccess).toHaveBeenCalledWith({
            expires_in: '3600',
            access_token: validToken,
            token_type: 'Bearer'
        })
    })
});
