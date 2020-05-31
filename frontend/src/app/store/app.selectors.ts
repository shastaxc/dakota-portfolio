import { RouterReducerState } from '@ngrx/router-store';

import { IAppState } from './app.state';

export const routerState = (state: IAppState): RouterReducerState => state.router;
