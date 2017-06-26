import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSmartComponent } from './header.component';

describe('HeaderSmartComponent', () => {
  let component: HeaderSmartComponent;
  let fixture: ComponentFixture<HeaderSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
