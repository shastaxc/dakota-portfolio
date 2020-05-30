import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ProjectName } from '@/library/constants/projects.const';
import { WindowScrollingService } from '@/library/services/window-scrolling.service';
import { ProjectsActions } from '../store/projects.actions';
import { ProjectsSelectors } from '../store/projects.selectors';

@Component({
  selector: 'dport-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent implements OnInit {
  RVCT = ProjectName.RVCT;
  KEY_TERRAIN = ProjectName.KEY_TERRAIN;
  TRAINING_READINESS_PORTAL = ProjectName.TRAINING_READINESS_PORTAL;

  showingProject$: Observable<ProjectName>;

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
  }
}
