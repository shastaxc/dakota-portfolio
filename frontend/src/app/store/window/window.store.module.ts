import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { WindowEffects } from './window.effects';
import { windowReducer } from './window.reducers';

@NgModule({
  imports: [
    StoreModule.forFeature('window', windowReducer),
    EffectsModule.forFeature([WindowEffects]),
  ],
})
export class WindowStoreModule {}
