import { StorageService } from './services/storage/storage.service';
import { SearchSpotifyApiService } from './services/spotify/search.api.service';
import { SearchEffects } from './state/search/search.effects';
import { searchReducer } from './state/search/search.reducer';
import { PlayerEffects } from './state/player/player.effects';
import { PlayerService } from './services/player/player.service';
import { playerReducer } from './state/player/player.reducer';
import { DurationPipe } from './pipes/duration.pipe';
import { ArtistSpotifyApiService } from './services/spotify/artist.api.service';
import { SpotifyHttpService } from './services/spotify/spotifyHttp.service';
import { PersonalizationSpotifyApiService } from './services/spotify/personalization.api.service';
import { SpotifyApiConstants } from './constants/spotifyApi.constants';
import { SpotifyAuthenticationValidGuard } from './guards/spotifyAuthenticationValid.guard';
import { ApplicationConstants } from './constants/application.constants';
import { SpotifyAuthenticationRedirectGuard } from './guards/spotifyAuthenticationRedirect.guard';
import { AuthenticationService } from './services/authentication/authentication.service';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginSmartComponent } from './components/login/login.component';
import { DashboardSmartComponent } from './components/dashboard/dashboard.component';
import { HeaderSmartComponent } from './components/header/header.component';
import { TracklistDumbComponent } from './components/tracklist/tracklist.component';

import { ArtistsGridDumbComponent } from './components/artists-grid/artists-grid.component';
import { UserTopArtistsGridSmartComponent } from './components/user-top-artists-grid/user-top-artists-grid.component';
import { ArtistFullSmartComponent } from './components/artist-full/artist-full.component';
import { PlayerDumbComponent } from './components/player/player.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SearchResultsSmartComponent } from './components/search-results/search-results.component';
import { PlayerReproducingState } from './state/player/playerReproducingState';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginSmartComponent,
    DashboardSmartComponent,
    HeaderSmartComponent,
    TracklistDumbComponent,
    ArtistsGridDumbComponent,
    UserTopArtistsGridSmartComponent,
    ArtistFullSmartComponent,
    DurationPipe,
    PlayerDumbComponent,
    SearchResultsSmartComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    StoreModule.forRoot({
      player: playerReducer,
      search: searchReducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 50
    }) : [],
    EffectsModule.forRoot([PlayerEffects, SearchEffects]),
  ],
  providers: [
    // Global services
    AuthenticationService,
    PlayerService,
    StorageService,

    // Guards
    SpotifyAuthenticationRedirectGuard,
    SpotifyAuthenticationValidGuard,

    // Constants
    ApplicationConstants,
    SpotifyApiConstants,

    // API
    SpotifyHttpService,
    PersonalizationSpotifyApiService,
    ArtistSpotifyApiService,
    SearchSpotifyApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
