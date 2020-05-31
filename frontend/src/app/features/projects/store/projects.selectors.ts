import { createSelector } from '@ngrx/store';

import { IAppState } from '@/store/app.state';
import { IProjectsState } from './projects.state';

export const projectsState = (state: IAppState): IProjectsState => state.projects;

export const projectListColCount = createSelector(
  projectsState,
  (state: IProjectsState) => state.projectListColCount
);

export const inspectingProject = createSelector(
  projectsState,
  (state: IProjectsState) => state.inspectingProject
);
