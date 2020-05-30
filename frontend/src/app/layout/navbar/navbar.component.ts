import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { closeSidenav, toggleSidenav } from '@/store/actions/layout.actions';

@Component({
  selector: 'dport-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private store: Store) {}

  toggleSidenav(): void {
    this.store.dispatch(toggleSidenav());
  }

  closeSidenav(): void {
    this.store.dispatch(closeSidenav());
  }
}
