import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@/shared/shared.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects.component';
import { projectsRoutes } from './projects.routes';

const ROUTES = [...projectsRoutes];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule, FlexLayoutModule],
  declarations: [ProjectsComponent, ProjectDetailsComponent],
})
export class ProjectsModule {}
