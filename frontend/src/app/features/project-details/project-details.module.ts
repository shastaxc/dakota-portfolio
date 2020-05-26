import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@/shared/shared.module';
import { ProjectDetailsComponent } from './project-details.component';
import { projectDetailsRoutes } from './project-details.routes';

const ROUTES = [...projectDetailsRoutes];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule],
  declarations: [ProjectDetailsComponent],
})
export class ProjectDetailsModule {}
