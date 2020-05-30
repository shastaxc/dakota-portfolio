import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { closeSidenav } from '@/store/actions/layout.actions';

@Component({
  selector: 'dport-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
})
export class NavLinksComponent {
  @Input() isHorizontal: boolean;

  constructor(private store: Store) {}

  closeSidenav(): void {
    this.store.dispatch(closeSidenav());
  }
}
