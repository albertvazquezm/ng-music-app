import { TrackComponent } from './../track/track.component';
import {BaseRequestOptions, Http, HttpModule} from '@angular/http';
import { DurationPipe } from './../../pipes/duration.pipe';
import { TracklistComponent } from './../tracklist/tracklist.component';
import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import * as Rx from 'rxjs';
import { MockBackend } from '@angular/http/testing';
import { ArtistFullSmartComponent } from './artist-full.component';
import {ActivatedRoute} from '@angular/router';
import {ArtistSpotifyApiService} from '../../services/spotify/artist.api.service';
import {ArtistSpotifyApiServiceStub} from '../../../test/stubs/artistSpotifyApiServiceStub.spec';
import {Store, StoreModule} from '@ngrx/store';
import {StoreMock} from '../../../test/mocks/storeMock';
import {IPlayerState} from '../../state/player/iPlayerState';
import {playerReducer} from '../../state/player/player.reducer';
import {searchReducer} from '../../state/search/search.reducer';
import {PlayerActions} from '../../state/player/player.actions';

describe('ArtistFullSmartComponent', () => {
  let component: ArtistFullSmartComponent;
  let fixture: ComponentFixture<ArtistFullSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TracklistComponent,
        TrackComponent,
        ArtistFullSmartComponent,
        DurationPipe
      ],
      imports: [
        HttpModule,
        StoreModule.provideStore({
          player: playerReducer,
          search: searchReducer
        }),
        /*ReactiveFormsModule,
        RouterTestingModule.withRoutes(routes),
        BrowserModule,
        StoreModule.provideStore({
          player: playerReducer,
          search: searchReducer
        }),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
          maxAge: 500
        }),
        EffectsModule.run(PlayerEffects),
        EffectsModule.run(SearchEffects)*/
      ],
      providers: [
        {
          provide: ArtistSpotifyApiService,
          useValue: ArtistSpotifyApiServiceStub
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {id: 8898}
            }
          }
        },
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        // Global services
        /*AuthenticationService,
        PlayerService,

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
        SearchSpotifyApiService*/
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistFullSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
