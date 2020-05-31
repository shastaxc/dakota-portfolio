import { MediaChange } from '@angular/flex-layout';
import { createAction, props } from '@ngrx/store';

export const updateBreakpoints = createAction(
  '[Window] Update Breakpoints',
  props<{ newBreakpoints: MediaChange[] }>()
);
