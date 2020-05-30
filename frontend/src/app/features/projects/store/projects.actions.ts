import { createAction, props } from '@ngrx/store';

import { ProjectName } from '@/library/constants/projects.const';

export class ProjectsActions {
  static setProjectListColCount = createAction(
    '[Projects] Set projectListColCount',
    props<{ numCols: number }>()
  );

  static inspectProject = createAction(
    '[Projects] Inspect Project',
    props<{ projectToInspect: ProjectName }>()
  );
}
