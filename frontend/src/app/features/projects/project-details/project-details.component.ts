import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectName } from '@/library/constants/projects.const';
import { WindowScrollingService } from '@/library/services/window-scrolling.service';

@Component({
  selector: 'dport-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  RVCT = ProjectName.RVCT;
  KEY_TERRAIN = ProjectName.KEY_TERRAIN;
  TRAINING_READINESS_PORTAL = ProjectName.TRAINING_READINESS_PORTAL;

  showingProject: ProjectName;

  constructor(
    private activatedRoute: ActivatedRoute,
    private scrollServ: WindowScrollingService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.showingProject = params.projectName;
    });

    this.scrollServ.scrollToTop();
  }
}
