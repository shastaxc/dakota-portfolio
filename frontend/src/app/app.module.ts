import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { HomeModule } from './features/home/home.module';
import { ProjectsModule } from './features/projects/projects.module';
import { ResumeModule } from './features/resume/resume.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HomeModule,
    LayoutModule,
    DeviceDetectorModule.forRoot(),
    ResumeModule,
    ProjectsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
