import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { environment } from '@/environments/environment';
import { HomeModule } from './features/home/home.module';
import { ProjectsModule } from './features/projects/projects.module';
import { ResumeModule } from './features/resume/resume.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { AppEffects } from './store/effects/app.effects';
import { appMetaReducers, appReducers } from './store/reducers/app.reducers';
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
    StoreModule.forRoot(appReducers, {
      metaReducers: appMetaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([AppEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.isProduction,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
