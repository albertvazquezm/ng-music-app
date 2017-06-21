import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsSmartComponent } from './search-results.component';

describe('SearchResultsSmartComponent', () => {
  let component: SearchResultsSmartComponent;
  let fixture: ComponentFixture<SearchResultsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
