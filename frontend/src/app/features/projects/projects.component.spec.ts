import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let spectator: Spectator<ProjectsComponent>;
  const createComponent = createComponentFactory(ProjectsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
