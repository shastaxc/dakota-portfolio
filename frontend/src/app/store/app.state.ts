import { IProjectsState } from '@/features/projects/store/projects.state';
import { ILayoutState } from '@/layout/store/layout.state';
import { IWindowState } from './window/window.state';

export interface IAppState {
  router?: any;
  layout?: ILayoutState;
  projects?: IProjectsState;
  window?: IWindowState;
}
