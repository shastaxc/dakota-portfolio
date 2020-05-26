import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';

import { ProjectDetailsComponent } from './project-details.component';

describe('ProjectDetailsComponent', () => {
  let spectator: Spectator<ProjectDetailsComponent>;
  const createComponent = createComponentFactory(ProjectDetailsComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
