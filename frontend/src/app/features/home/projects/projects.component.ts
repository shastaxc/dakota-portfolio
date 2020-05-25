import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'dport-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
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
}
