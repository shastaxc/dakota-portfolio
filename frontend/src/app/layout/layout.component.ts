import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { slideInAnimation } from '@/library/constants/animations.const';
import { WindowSelectors } from '@/store/window';
import { LayoutActions, LayoutSelectors } from './store';

@Component({
  selector: 'dport-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInAnimation],
})
export class LayoutComponent implements OnInit, AfterViewInit, OnDestroy {
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

  constructor(private store: Store, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.isSidenavOpen$ = this.store.pipe(select(LayoutSelectors.isSidenavOpen));

    // Controls the open and closing action of the sidenav based on state variable
    this.isSidenavOpen$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((isOpen: boolean) => {
        if (!this.sidenav) return;
        isOpen ? this.sidenav.open() : this.sidenav.close();
        this.changeDetector.markForCheck();
      });
  }

  ngAfterViewInit(): void {
    // Keep top level containers aligned to avoid overlap/clipping
    // Only checks when window size hits a breakpoint
    this.store
      .pipe(select(WindowSelectors.breakpoints), takeUntil(this.ngUnsubscribe$))
      .subscribe(() => {
        if (!this.navbar || !this.sidenavContainer || !this.sidenav) return;
        const offset = this.navbarEl.offsetHeight;
        this.sidenavContainerEl.style.top = offset + 'px';
        this.sidenav.fixedTopGap = offset;
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
