import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

import { SharedModule } from '@/shared/shared.module';
import { ResumeComponent } from './resume.component';
import { resumeRoutes } from './resume.routes';

const ROUTES = [...resumeRoutes];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule, NgxExtendedPdfViewerModule],
  declarations: [ResumeComponent],
})
export class ResumeModule {}
