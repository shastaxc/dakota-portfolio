import { createSelector } from '@ngrx/store';

import { IAppState } from '@/store/app.state';
import { IProjectsState } from './projects.state';

export class ProjectsSelectors {
  static projectsState = (state: IAppState): IProjectsState => state.projects;

  static projectListColCount = createSelector(
    ProjectsSelectors.projectsState,
    (state: IProjectsState) => state.projectListColCount
  );

  static inspectingProject = createSelector(
    ProjectsSelectors.projectsState,
    (state: IProjectsState) => state.inspectingProject
  );
}
