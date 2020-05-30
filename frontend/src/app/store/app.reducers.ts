import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '@/environments/environment';
import { IAppState } from './app.state';

export const appReducers: ActionReducerMap<IAppState> = {
  router: routerReducer,
};

export const appMetaReducers: MetaReducer<IAppState>[] = !environment.isProduction
  ? []
  : [];
