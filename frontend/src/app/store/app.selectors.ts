import { RouterReducerState } from '@ngrx/router-store';

import { IAppState } from './app.state';

export class AppSelectors {
  static routerState = (state: IAppState): RouterReducerState => state.router;
}
