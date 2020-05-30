import { createAction } from '@ngrx/store';

export class LayoutActions {
  static toggleSidenav = createAction('[Layout] Toggle Sidenav');
  static openSidenav = createAction('[Layout] Open Sidenav');
  static closeSidenav = createAction('[Layout] Close Sidenav');
}
