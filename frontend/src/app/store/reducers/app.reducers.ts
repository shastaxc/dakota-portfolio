import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '@/environments/environment';
import { IAppState } from '../state/app.state';
import { layoutReducer } from './layout.reducers';

export const appReducers: ActionReducerMap<IAppState> = {
  router: routerReducer,
  layout: layoutReducer,
};

export const appMetaReducers: MetaReducer<IAppState>[] = !environment.isProduction
  ? []
  : [];
