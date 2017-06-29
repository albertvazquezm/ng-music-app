import { artistFullMockList } from './../../../test/mocks/artistFullMockList.spec';
import { ArtistsGridDumbComponent } from './artists-grid.component';
import {BaseRequestOptions, Http, HttpModule} from '@angular/http';
import { DurationPipe } from './../../pipes/duration.pipe';
import { TracklistDumbComponent } from './../tracklist/tracklist.component';
import { async, ComponentFixture, inject, TestBed, fakeAsync, getTestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { MockBackend } from '@angular/http/testing';
import { ActivatedRoute, Router } from '@angular/router';
import {ArtistSpotifyApiService} from '../../services/spotify/artist.api.service';
import {ArtistSpotifyApiServiceStub} from '../../../test/stubs/artistSpotifyApiServiceStub.spec';
import {Store, StoreModule} from '@ngrx/store';
import {StoreMock} from '../../../test/mocks/storeMock';
import {IPlayerState} from '../../state/player/iPlayerState';
import {playerReducer} from '../../state/player/player.reducer';
import {searchReducer} from '../../state/search/search.reducer';
import {PlayerActions} from '../../state/player/player.actions';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';



fdescribe('ArtistsGridDumbComponent', () => {
  let component: TestMusicArtistsGridWrapper;
  let fixture: ComponentFixture<TestMusicArtistsGridWrapper>;
  let element: HTMLElement;
  let debugElement: DebugElement;
  const routerStub = {
    navigate: () => {}
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArtistsGridDumbComponent,
        TestMusicArtistsGridWrapper,
        DummyComponent
      ],
      providers: [
        {
          provide: Router,
          useValue: routerStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMusicArtistsGridWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement;
    debugElement = fixture.debugElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of artists', () => {
    fixture.whenStable().then(() => {
      expect(element.querySelectorAll('.artists-grid__artist').length).toBe(3);
    });
  });

   it('should render the artists names in the right order', () => {
    fixture.whenStable().then(() => {
      const titleElements = element.querySelectorAll('.artists-grid__artist h2');
      expect(titleElements.item(0).innerHTML).toBe('Band of Horses');
      expect(titleElements.item(1).innerHTML).toBe('Of Monsters and Men');
      expect(titleElements.item(2).innerHTML).toBe('Leiva');
    });
  });

  it('should redirect you to the artist page on click', async(() => {
    const firstArtistElement = debugElement.query(By.css('.artists-grid__artist'));
    const childrenComponent = debugElement.children[0].componentInstance;
    spyOn(childrenComponent, 'onClickOnArtist');
    firstArtistElement.nativeElement.click();
    fixture.whenStable().then(() => {
      expect(childrenComponent.onClickOnArtist).toHaveBeenCalledWith('0OdUWJ0sBjDrqHygGUXeCF');
    });
  }));
});

/** Mock wrapper component */

@Component({
 template  : '<music-artists-grid [artists]="mockArtistList"></music-artists-grid>',
})
class TestMusicArtistsGridWrapper {
    mockArtistList = artistFullMockList;
}

@Component({
  template: ''
})
class DummyComponent {}
