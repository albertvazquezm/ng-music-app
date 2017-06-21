import * as Rx from 'rxjs';

export class StoreMock<T> extends Rx.Observable<T> {
  dispatch(action){}
}
