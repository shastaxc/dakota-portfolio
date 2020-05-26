import { ICustomRoute, RouteScrollBehaviour } from '@/library/models/router-scroll.model';
import { HomeComponent } from './home.component';

export const homeRoutes: ICustomRoute[] = [
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'HomePage',
      scrollBehavior: RouteScrollBehaviour.KEEP_POSITION,
    },
  },
];
