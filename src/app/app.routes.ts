import { Route } from '@angular/router';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { CoverComponent } from './components/cover/cover.component';
import { DetailsComponent } from './components/cover-details/details.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'instructions',
  },
  {
    path: 'menu',
    component: CoverComponent,
  },
  {
    path: 'menu/:id',
    component: DetailsComponent,
  },
  {
    path: 'instructions',
    component: InstructionsComponent,
  },
];
