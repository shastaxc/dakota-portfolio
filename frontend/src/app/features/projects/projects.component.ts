import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange } from '@angular/flex-layout';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProjectName } from '@/library/constants/projects.const';
import { WindowScrollingService } from '@/library/services/window-scrolling.service';
import { WindowSelectors } from '@/store/window';
import { ProjectsActions, ProjectsSelectors } from './store';

@Component({
  selector: 'dport-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit, OnDestroy {
  ngUnsubscribe$ = new Subject<void>();

  RVCT = ProjectName.RVCT;
  KEY_TERRAIN = ProjectName.KEY_TERRAIN;
  TRAINING_READINESS_PORTAL = ProjectName.TRAINING_READINESS_PORTAL;

  numCols$: Observable<number>;

  gridColsByBreakpoint: Map<string, number> = new Map([
    ['gt-sm', 3],
    ['sm', 2],
    ['xs', 1],
  ]);

  constructor(private store: Store, private scrollServ: WindowScrollingService) {}

  ngOnInit(): void {
    this.numCols$ = this.store.select(ProjectsSelectors.projectListColCount);

    // Scroll to top of page when component is created
    this.scrollServ.scrollToTop();

    // Whenever window breakpoint is hit, update column count
    this.store
      .pipe(select(WindowSelectors.breakpoints), takeUntil(this.ngUnsubscribe$))
      .subscribe((changes: MediaChange[]) => {
        const change = changes.find((ch: MediaChange) =>
          this.gridColsByBreakpoint.has(ch.mqAlias)
        );
        this.store.dispatch(
          ProjectsActions.setProjectListColCount({
            numCols: this.gridColsByBreakpoint.get(change.mqAlias),
          })
        );
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
  }
}
