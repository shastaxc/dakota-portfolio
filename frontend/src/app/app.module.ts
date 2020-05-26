import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { environment } from '@/environments/environment';
import { HomeModule } from './features/home/home.module';
import { ProjectDetailsModule } from './features/project-details/project-details.module';
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
    ProjectDetailsModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: environment.production ? NgxLoggerLevel.OFF : NgxLoggerLevel.ERROR,
      serverLogLevel: NgxLoggerLevel.ERROR,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
