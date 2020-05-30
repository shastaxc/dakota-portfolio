import { ILayoutState, initialLayoutState } from './layout.state';

export interface IAppState {
  router?: any;
  layout?: ILayoutState;
}

export const initialAppState: IAppState = {
  layout: initialLayoutState,
};
