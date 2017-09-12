import { Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRegistrationComponent } from './auth-registration/auth-registration.component';
import { AuthForgotPassComponent } from './auth-forgot-pass/auth-forgot-pass.component';


export const AuthRoutes: Routes = [
  {
    path: 'login',
    component: <any>AuthLoginComponent
  },
  {
    path: 'registration',
    component: <any>AuthRegistrationComponent
  },
  {
    path: 'forgot-pass',
    component: <any>AuthForgotPassComponent
  }
];
