import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { LayoutActions } from '@/layout/store/layout.actions';

@Component({
  selector: 'dport-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinksComponent {
  @Input() isHorizontal: boolean;

  constructor(private store: Store) {}

  closeSidenav(): void {
    this.store.dispatch(LayoutActions.closeSidenav());
  }
}
