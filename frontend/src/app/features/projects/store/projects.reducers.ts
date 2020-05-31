import { createReducer, on } from '@ngrx/store';

import * as ProjectsActions from './projects.actions';
import { initialProjectsState, IProjectsState } from './projects.state';

const _projectsReducer = createReducer(
  initialProjectsState,
  on(
    ProjectsActions.setProjectListColCount,
    (state, { numCols }): IProjectsState => {
      return {
        ...state,
        projectListColCount: numCols,
      };
    }
  ),
  on(
    ProjectsActions.inspectProject,
    (state, { projectToInspect }): IProjectsState => {
      return {
        ...state,
        inspectingProject: projectToInspect,
      };
    }
  )
);

export function projectsReducer(state, action): IProjectsState {
  return _projectsReducer(state, action);
}
