import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsGridDumbComponent } from './artists-grid.component';

describe('ArtistsGridDumbComponent', () => {
  let component: ArtistsGridDumbComponent;
  let fixture: ComponentFixture<ArtistsGridDumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsGridDumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsGridDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
