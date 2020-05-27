import { Route } from '@angular/router';

import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects.component';

export const projectsRoutes: Route[] = [
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      animation: 'ProjectsPage',
    },
  },
  {
    path: 'projects/:projectName',
    component: ProjectDetailsComponent,
    data: {
      animation: 'ProjectDetailsPage',
    },
  },
];
