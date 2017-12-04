import { RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AuthRoutes } from './auth/auth.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { MoneyRoutes } from './money-manager/money.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { WeatherComponent } from './weather/weather.component';
import { NewsComponent } from './news/news.component';

export const ROUTES:RouterModule = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  ...AuthRoutes,
  ...DashboardRoutes,
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'user',
        component: UserInfoComponent
      },
      {
        path: 'todolist',
        component: TodolistComponent
      },
      ...MoneyRoutes,
      {
        path: 'weather',
        component: WeatherComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
    ]
  }
];
