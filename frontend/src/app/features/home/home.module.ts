import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@/shared/shared.module';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';

const ROUTES = [...homeRoutes];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule],
  declarations: [HomeComponent, IntroComponent, ProjectsComponent],
})
export class HomeModule {}
