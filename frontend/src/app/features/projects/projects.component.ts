import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

import { ProjectName } from '@/library/constants/projects.const';
import { WindowScrollingService } from '@/library/services/window-scrolling.service';

@Component({
  selector: 'dport-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  RVCT = ProjectName.RVCT;
  KEY_TERRAIN = ProjectName.KEY_TERRAIN;
  TRAINING_READINESS_PORTAL = ProjectName.TRAINING_READINESS_PORTAL;

  showingProject: ProjectName;
  numCols = 1;

  gridColsByBreakpoint: Map<string, number> = new Map([
    ['gt-sm', 3],
    ['sm', 2],
    ['xs', 1],
  ]);

  constructor(
    private mediaObserver: MediaObserver,
    private scrollServ: WindowScrollingService
  ) {}

  ngOnInit(): void {
    this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      const change = changes.find((ch: MediaChange) =>
        this.gridColsByBreakpoint.has(ch.mqAlias)
      );
      this.numCols = this.gridColsByBreakpoint.get(change.mqAlias);
    });

    this.scrollServ.scrollToTop();
  }
}
