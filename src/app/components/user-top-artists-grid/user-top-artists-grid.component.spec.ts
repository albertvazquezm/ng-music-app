import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopArtistsGridComponent } from './user-top-artists-grid.component';

describe('UserTopArtistsGridComponent', () => {
  let component: UserTopArtistsGridComponent;
  let fixture: ComponentFixture<UserTopArtistsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopArtistsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopArtistsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should be created', () => {
    expect(component).toBeTruthy();
  });*/
});
