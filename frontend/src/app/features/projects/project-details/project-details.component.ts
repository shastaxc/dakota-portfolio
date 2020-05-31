import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange } from '@angular/flex-layout';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { ProjectName } from '@/library/constants/projects.const';
import { WindowScrollingService } from '@/library/services/window-scrolling.service';
import { WindowSelectors } from '@/store/window';
import { ProjectsActions, ProjectsSelectors } from '../store';

@Component({
  selector: 'dport-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  ngUnsubscribe$ = new Subject<void>();

  RVCT = ProjectName.RVCT;
  KEY_TERRAIN = ProjectName.KEY_TERRAIN;
  TRAINING_READINESS_PORTAL = ProjectName.TRAINING_READINESS_PORTAL;

  showingProject$: Observable<ProjectName>;

  windowIsXs$: Observable<boolean>;

  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private scrollServ: WindowScrollingService
  ) {}

  ngOnInit(): void {
    this.showingProject$ = this.store.select(ProjectsSelectors.inspectingProject);

    // Scroll to top of page when component is created
    this.scrollServ.scrollToTop();

    this.activatedRoute.params.subscribe((params: any) => {
      this.store.dispatch(
        ProjectsActions.inspectProject({ projectToInspect: params.projectName })
      );
    });

    // Check if window size is xs
    this.windowIsXs$ = this.store.pipe(
      select(WindowSelectors.breakpoints),
      takeUntil(this.ngUnsubscribe$),
      map((changes: MediaChange[]) =>
        Boolean(changes.find((ch: MediaChange) => ch.mqAlias === 'xs'))
      )
    );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
  }
}
