import { ProjectName } from '@/library/constants/projects.const';

export interface IProjectsState {
  projectListColCount?: number;
  inspectingProject?: ProjectName;
}

export const initialProjectsState: IProjectsState = {
  projectListColCount: null,
  inspectingProject: null,
};
