import { createReducer, on } from '@ngrx/store';

import { LayoutActions } from './layout.actions';
import { ILayoutState, initialLayoutState } from './layout.state';

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
