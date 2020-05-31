import { Injectable } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Actions, Effect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { isEqual } from 'lodash';
import { empty, Observable, of } from 'rxjs';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';

import { WindowActions, WindowSelectors } from '.';

@Injectable()
export class WindowEffects {
  constructor(
    private actions$: Actions,
    private mediaObserver: MediaObserver,
    private store: Store
  ) {}

  @Effect()
  resizeWindow$(): Observable<TypedAction<string>> {
    return this.mediaObserver.asObservable().pipe(
      withLatestFrom(this.store.pipe(select(WindowSelectors.breakpoints))),
      // MediaObserver keeps firing twice, and seems to be a problem with the library.
      // This check will avoid propagating duplicate changes upstream.
      mergeMap(([newBreakpoints, oldBreakpoints]: [MediaChange[], MediaChange[]]) =>
        isEqual(newBreakpoints, oldBreakpoints) ? empty() : of(newBreakpoints)
      ),
      map((changes: MediaChange[]) =>
        WindowActions.updateBreakpoints({ newBreakpoints: changes })
      )
    );
  }
}
