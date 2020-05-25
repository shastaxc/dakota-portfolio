import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

import { ProjectName } from '@/library/constants/projects.const';

@Component({
  selector: 'dport-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideLeftRight', [
      state(
        'show-left',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'show-right',
        style({
          transform: 'translateX(-50%)',
        })
      ),
      transition('show-left <=> show-right', [animate('200ms ease-in')]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  showingProject: ProjectName;
  numCols = 1;

  gridColsByBreakpoint: Map<string, number> = new Map([
    ['gt-sm', 3],
    ['sm', 2],
    ['xs', 1],
  ]);

  constructor(private mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
      const change = changes.find((ch: MediaChange) =>
        this.gridColsByBreakpoint.has(ch.mqAlias)
      );
      this.numCols = this.gridColsByBreakpoint.get(change.mqAlias);
    });
  }

  showProject(projectNameStr: string): void {
    const projectName = ProjectName[projectNameStr];
    if (projectName) {
      this.showingProject = projectName;
    }
  }
}
