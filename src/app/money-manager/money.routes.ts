import { Routes } from '@angular/router';
import { ListComponent } from './user-manager/list/list.component';
import { CreateComponent } from './user-manager/create/create.component';

export const MoneyRoutes: Routes = [
  {
    path: 'money-manager',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'prefix'
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            component: <any>ListComponent
          }

        ]
      },
      {
        path: 'create',
        children: [
          {
            path: '',
            component: <any>CreateComponent
          }
        ]
      },
    ]
  }
];
