import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { slideInAnimation } from '@/library/constants/animations.const';
import { LayoutActions } from './store/layout.actions';
import { LayoutSelectors } from './store/layout.selectors';

@Component({
  selector: 'dport-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
})
export class LayoutComponent implements OnInit {
  ngUnsubscribe$ = new Subject<void>();

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
    this.isSidenavOpen$ = this.store.pipe(select(LayoutSelectors.isSidenavOpen));

    // Listen to changes in window breakpoints
    this.mediaObserver
      .asObservable()
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(() => {
        // Whenever breakpoint changes, change state of headerHeight
        const offset = this.navbarEl.offsetHeight;
        this.sidenavContainerEl.style.top = offset + 'px';
        this.sidenav.fixedTopGap = offset;
      });

    this.isSidenavOpen$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((isOpen: boolean) => {
        if (!this.sidenav) return;
        isOpen ? this.sidenav.open() : this.sidenav.close();
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
  }

  closeSidenav(): void {
    this.store.dispatch(LayoutActions.closeSidenav());
  }

  prepareRoute(outlet: RouterOutlet): string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
