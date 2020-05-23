import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { IntroComponent } from './intro.component';

describe('IntroComponent', () => {
  let spectator: Spectator<IntroComponent>;
  const createComponent = createComponentFactory(IntroComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
