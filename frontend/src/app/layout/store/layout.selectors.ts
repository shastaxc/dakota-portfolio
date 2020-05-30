import { createSelector } from '@ngrx/store';

import { IAppState } from '@/store/app.state';
import { ILayoutState } from './layout.state';

export class LayoutSelectors {
  static layoutState = (state: IAppState): ILayoutState => state.layout;

  static isSidenavOpen = createSelector(
    LayoutSelectors.layoutState,
    (state: ILayoutState) => state.isSidenavOpen
  );
}
