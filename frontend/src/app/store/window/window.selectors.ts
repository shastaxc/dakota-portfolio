import { createSelector } from '@ngrx/store';

import { IAppState } from '@/store/app.state';
import { IWindowState } from './window.state';

export const windowState = (state: IAppState): IWindowState => state.window;

export const breakpoints = createSelector(
  windowState,
  (state: IWindowState) => state.breakpoints
);
