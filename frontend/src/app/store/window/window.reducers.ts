import { createReducer, on } from '@ngrx/store';

import { initialWindowState, IWindowState } from './window.state';
import { WindowActions } from '.';

const _windowReducer = createReducer(
  initialWindowState,
  on(
    WindowActions.updateBreakpoints,
    (state, { newBreakpoints }): IWindowState => {
      return {
        ...state,
        breakpoints: newBreakpoints,
      };
    }
  )
);

export function windowReducer(state, action): IWindowState {
  return _windowReducer(state, action);
}
