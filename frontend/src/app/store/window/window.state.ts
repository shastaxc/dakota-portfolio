import { MediaChange } from '@angular/flex-layout';

export interface IWindowState {
  breakpoints?: MediaChange[];
}

export const initialWindowState: IWindowState = {
  breakpoints: null,
};
