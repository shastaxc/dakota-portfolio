import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '@/shared/shared.module';
import { NavLinksComponent } from './navbar/nav-links/nav-links.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavInnardsComponent } from './sidenav-innards/sidenav-innards.component';
import { layoutReducer } from './store/layout.reducers';
import { LayoutComponent } from './layout.component';
import { layoutRoutes } from './layout.routes';

const ROUTES = [...layoutRoutes];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule,
    MatToolbarModule,
    MatSidenavModule,
    StoreModule.forFeature('layout', layoutReducer),
    EffectsModule.forFeature([]),
  ],
  declarations: [
    NavbarComponent,
    LayoutComponent,
    SidenavInnardsComponent,
    NavLinksComponent,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
