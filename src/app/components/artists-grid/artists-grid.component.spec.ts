import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsGridComponent } from './artists-grid.component';

describe('ArtistsGridComponent', () => {
  let component: ArtistsGridComponent;
  let fixture: ComponentFixture<ArtistsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
