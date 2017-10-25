import {BaseRequestOptions, Http, HttpModule} from '@angular/http';
import { DurationPipe } from './../../pipes/duration.pipe';
import { TracklistDumbComponent } from './../tracklist/tracklist.component';
import { async, ComponentFixture, inject, TestBed, fakeAsync, getTestBed } from '@angular/core/testing';
import * as Rx from 'rxjs';
import { MockBackend } from '@angular/http/testing';
import { ArtistFullSmartComponent } from './artist-full.component';
import {ActivatedRoute} from '@angular/router';
import {ArtistSpotifyApiService} from '../../services/spotify/artist.api.service';
import {ArtistSpotifyApiServiceStub} from '../../../test/stubs/artistSpotifyApiServiceStub';
import {Store, StoreModule} from '@ngrx/store';
import {StoreMock} from '../../../test/mocks/storeMock';
import {PlayerState} from '../../state/player/PlayerState';
import {playerReducer} from '../../state/player/player.reducer';
import {searchReducer} from '../../state/search/search.reducer';
import {PlayerActions} from '../../state/player/player.actions';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('ArtistFullSmartComponent', () => {
  let component: ArtistFullSmartComponent;
  let fixture: ComponentFixture<ArtistFullSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TracklistDumbComponent,
        ArtistFullSmartComponent,
        DurationPipe
      ],
      imports: [
        HttpModule,
        StoreModule.provideStore({
          player: playerReducer,
          search: searchReducer
        }),
        RouterTestingModule
      ],
      providers: [
        {
          provide: ArtistSpotifyApiService,
          useClass: ArtistSpotifyApiServiceStub
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
        }
      ]
    })
    .compileComponents();
  }));

  it('should be created', () => {
    fixture = TestBed.createComponent(ArtistFullSmartComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should get the proper artist using the id from URL', () => {
    inject([ArtistSpotifyApiService], fakeAsync((mockArtistSpotifyApiService: ArtistSpotifyApiService) => {
      spyOn(mockArtistSpotifyApiService, 'getArtist');
      fixture = TestBed.createComponent(ArtistFullSmartComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(mockArtistSpotifyApiService.getArtist).toHaveBeenCalledWith(8898);
    }));
  });

  it('should get the artist top tracks list', () => {
    inject([ArtistSpotifyApiService], fakeAsync((mockArtistSpotifyApiService: ArtistSpotifyApiService) => {
      spyOn(mockArtistSpotifyApiService, 'getArtistTopTracks');
      fixture = TestBed.createComponent(ArtistFullSmartComponent);
      component = fixture.componentInstance;
      component.ngOnInit();
      expect(mockArtistSpotifyApiService.getArtistTopTracks).toHaveBeenCalledWith(8898);
    }));
  });

  it('should render the artist name', () => {
      fixture = TestBed.createComponent(ArtistFullSmartComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      const element = fixture.nativeElement;
      fixture.whenStable().then(() => {
        expect(element.querySelector('h1').innerText).toBe('Band of Horses');
      });
  });
});
