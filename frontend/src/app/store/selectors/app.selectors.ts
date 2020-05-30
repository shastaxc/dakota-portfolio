import { RouterReducerState } from '@ngrx/router-store';
import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ILayoutState } from '../state/layout.state';

export const getRouterState = (state: IAppState): RouterReducerState => state.router;
export const getLayoutState = (state: IAppState): ILayoutState => state.layout;

export const getHeaderHeight = createSelector(
  getLayoutState,
  (state: ILayoutState) => state.headerHeight
);
export const getIsSidenavOpen = createSelector(
  getLayoutState,
  (state: ILayoutState) => state.isSidenavOpen
);
