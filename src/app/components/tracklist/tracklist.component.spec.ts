import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracklistDumbComponent } from './tracklist.component';

describe('TracklistDumbComponent', () => {
  let component: TracklistDumbComponent;
  let fixture: ComponentFixture<TracklistDumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracklistDumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracklistDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
