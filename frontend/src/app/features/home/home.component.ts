import { Component } from '@angular/core';

import { ProjectName } from '@/library/constants/projects.const';

@Component({
  selector: 'dport-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  showingProject: ProjectName = null;
}
