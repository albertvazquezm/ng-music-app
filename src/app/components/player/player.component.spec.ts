import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDumbComponent } from './player.component';

describe('PlayerDumbComponent', () => {
  let component: PlayerDumbComponent;
  let fixture: ComponentFixture<PlayerDumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerDumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
