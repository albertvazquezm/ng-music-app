import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchActions } from './../../state/search/search.actions';
import { SearchState } from './../../state/search/SearchState';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

const QUERY_URL_PARAM = 'q';

@Component({
  selector: 'music-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderSmartComponent implements OnInit {

  public searchInputModel: string;
  public searchQuery: Rx.Observable<string>;

  constructor(
    private _searchStore: Store<SearchState>,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParamMap.map((params: ParamMap) => params.get(QUERY_URL_PARAM)).subscribe((query: string) => {
      this.searchInputModel = query;
    })
  }

  public onSearchInputModelChange(value) {
    this._searchStore.dispatch(SearchActions.setQuery(value));
  }

}
