import { Route } from '@angular/router';

import { ProjectDetailsComponent } from './project-details.component';

export const projectDetailsRoutes: Route[] = [
  {
    path: 'project/:projectName',
    component: ProjectDetailsComponent,
    data: {
      animation: 'ProjectDetailsPage',
    },
  },
];
