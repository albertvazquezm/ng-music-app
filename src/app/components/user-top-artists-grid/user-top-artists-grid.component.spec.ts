import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopArtistsGridSmartComponent } from './user-top-artists-grid.component';

describe('UserTopArtistsGridSmartComponent', () => {
  let component: UserTopArtistsGridSmartComponent;
  let fixture: ComponentFixture<UserTopArtistsGridSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopArtistsGridSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopArtistsGridSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should be created', () => {
    expect(component).toBeTruthy();
  });*/
});
