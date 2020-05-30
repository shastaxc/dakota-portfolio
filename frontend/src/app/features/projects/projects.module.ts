import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@/shared/shared.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { projectsReducer } from './store/projects.reducers';
import { ProjectsComponent } from './projects.component';
import { projectsRoutes } from './projects.routes';

const ROUTES = [...projectsRoutes];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
    FlexLayoutModule,
    StoreModule.forFeature('projects', projectsReducer),
    EffectsModule.forFeature([]),
  ],
  declarations: [ProjectsComponent, ProjectDetailsComponent],
})
export class ProjectsModule {}
