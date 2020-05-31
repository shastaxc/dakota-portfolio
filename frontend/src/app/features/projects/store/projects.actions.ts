import { createAction, props } from '@ngrx/store';

import { ProjectName } from '@/library/constants/projects.const';

export const setProjectListColCount = createAction(
  '[Projects] Set projectListColCount',
  props<{ numCols: number }>()
);

export const inspectProject = createAction(
  '[Projects] Inspect Project',
  props<{ projectToInspect: ProjectName }>()
);
