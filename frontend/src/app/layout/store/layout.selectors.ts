import { createSelector } from '@ngrx/store';

import { IAppState } from '@/store/app.state';
import { ILayoutState } from './layout.state';

export const layoutState = (state: IAppState): ILayoutState => state.layout;

export const isSidenavOpen = createSelector(
  layoutState,
  (state: ILayoutState) => state.isSidenavOpen
);
