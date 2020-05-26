import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { RouterScrollService } from '@/library/services/router-scroll/router-scroll.service';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'dport-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements AfterViewInit {
  @ViewChild('navbar') navbar: ElementRef;
  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('sidenavContainer', { read: ElementRef }) sidenavContainer: ElementRef;

  @ViewChild('mainScrollElement', { read: ElementRef })
  private mainScrollElement!: ElementRef;

  headerHeight: number;

  get navbarEl(): HTMLDivElement {
    return this.navbar.nativeElement as HTMLDivElement;
  }

  get sidenavContainerEl(): any {
    return this.sidenavContainer.nativeElement;
  }

  constructor(
    private sidenavService: SidenavService,
    private routerScroll: RouterScrollService
  ) {}

  ngAfterViewInit(): void {
    // Get header height
    of('')
      .pipe(
        delay(0), // Avoiding ExpressionChangedAfterItHasBeenCheckedError
        map(() => this.navbarEl.offsetHeight)
      )
      .subscribe((height: any) => {
        this.headerHeight = height;
        this.sidenavContainerEl.style.top = height + 'px';
      });

    // Open or close sidenav based on state in the sidenav service
    this.sidenavService.isSidenavOpen$.subscribe((state: boolean) => {
      state ? this.sidenav.open() : this.sidenav.close();
    });

    this.routerScroll.disableScrollDefaultViewport();
    this.routerScroll.setCustomViewportToScroll(this.mainScrollElement.nativeElement);
  }

  toggleSidenav(): void {
    this.sidenavService.toggleSidenav();
  }

  closeSidenav(): void {
    this.sidenavService.closeSidenav();
  }

  // Also recalculate header height if window is resized
  @HostListener('window:resize', ['$event'])
  private onResize(): void {
    this.headerHeight = this.navbarEl.offsetHeight;
    this.sidenavContainerEl.style.top = this.headerHeight + 'px';
  }
}
