import { RouterModule } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';
import { AuthRoutes } from './auth/auth.routes';
export const ROUTES:RouterModule = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },


  ...AuthRoutes,
  {
    path: 'todolist',
    component: TodolistComponent
  }

];
