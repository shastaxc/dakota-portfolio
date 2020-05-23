import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let spectator: Spectator<ResumeComponent>;
  const createComponent = createComponentFactory(ResumeComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
