import { ActivatedRoute, ParamMap } from '@angular/router';
import { SearchActions } from './../../state/search/search.actions';
import { ISearchState } from './../../state/search/iSearchState';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as Rx from 'rxjs';

@Component({
  selector: 'music-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public searchInputModel: string;
  public searchQuery: Rx.Observable<string>;

  constructor(
    private _searchStore: Store<ISearchState>,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRoute.queryParamMap.map((params: ParamMap) => params.get('q')).subscribe((query: string) => {
      this.searchInputModel = query;
    })
  }

  public onSearchInputModelChange(ev) {
    this._searchStore.dispatch(SearchActions.setQuery(ev));
  }

}
