import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { LayoutActions } from '../store';

@Component({
  selector: 'dport-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  constructor(private store: Store) {}

  toggleSidenav(): void {
    this.store.dispatch(LayoutActions.toggleSidenav());
  }

  closeSidenav(): void {
    this.store.dispatch(LayoutActions.closeSidenav());
  }
}
