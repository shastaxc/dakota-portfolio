import { createReducer, on } from '@ngrx/store';

import * as LayoutActions from '../actions/layout.actions';
import { ILayoutState, initialLayoutState } from '../state/layout.state';

const _layoutReducer = createReducer(
  initialLayoutState,
  on(
    LayoutActions.toggleSidenav,
    (state): ILayoutState => {
      return {
        ...state,
        isSidenavOpen: !state.isSidenavOpen,
      };
    }
  ),
  on(
    LayoutActions.openSidenav,
    (state): ILayoutState => {
      return {
        ...state,
        isSidenavOpen: true,
      };
    }
  ),
  on(
    LayoutActions.closeSidenav,
    (state): ILayoutState => {
      return {
        ...state,
        isSidenavOpen: false,
      };
    }
  )
);

export function layoutReducer(state, action): ILayoutState {
  return _layoutReducer(state, action);
}
