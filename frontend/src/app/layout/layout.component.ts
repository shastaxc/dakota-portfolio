import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { slideInAnimation } from '@/library/constants/animations.const';
import { closeSidenav } from '@/store/actions/layout.actions';
import { getIsSidenavOpen } from '@/store/selectors/app.selectors';

@Component({
  selector: 'dport-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [slideInAnimation],
})
export class LayoutComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef;
  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('sidenavContainer', { read: ElementRef }) sidenavContainer: ElementRef;

  isSidenavOpen$: Observable<boolean>;

  get navbarEl(): HTMLDivElement {
    return this.navbar.nativeElement as HTMLDivElement;
  }

  get sidenavContainerEl(): any {
    return this.sidenavContainer.nativeElement;
  }

  constructor(private store: Store, private mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.isSidenavOpen$ = this.store.pipe(select(getIsSidenavOpen));

    // Listen to changes in window breakpoints
    this.mediaObserver.asObservable().subscribe(() => {
      // Whenever breakpoint changes, change state of headerHeight
      const offset = this.navbarEl.offsetHeight;
      this.sidenavContainerEl.style.top = offset + 'px';
      this.sidenav.fixedTopGap = offset;
    });

    this.isSidenavOpen$.subscribe((isOpen: boolean) => {
      if (!this.sidenav) return;
      isOpen ? this.sidenav.open() : this.sidenav.close();
    });
  }

  closeSidenav(): void {
    this.store.dispatch(closeSidenav());
  }

  prepareRoute(outlet: RouterOutlet): string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
