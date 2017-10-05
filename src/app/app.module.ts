import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { ROUTES } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthRegistrationComponent } from './auth/auth-registration/auth-registration.component';
import { AuthForgotPassComponent } from './auth/auth-forgot-pass/auth-forgot-pass.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CurrencyExchangeComponent } from './money-manager/currency-exchange/currency-exchange.component';
import { CreateComponent } from './money-manager/user-manager/create/create.component';
import { UpdateComponent } from './money-manager/user-manager/update/update.component';
import { ViewComponent } from './money-manager/user-manager/view/view.component';
import { ListComponent } from './money-manager/user-manager/list/list.component';
import { HttpModule } from '@angular/http';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather/weather.service';
import { UserManagerService } from './money-manager/user-manager/user-manager.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md'


export const firebaseConfig = {
  apiKey: "AIzaSyDgQVB1LyDiKFk72aQm0NreOQsZL9dxF4s",
  authDomain: "login-test-aa4ed.firebaseapp.com",
  databaseURL: "https://login-test-aa4ed.firebaseio.com",
  projectId: "login-test-aa4ed",
  storageBucket: "login-test-aa4ed.appspot.com",
  messagingSenderId: "532541552556"
};

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AuthLoginComponent,
    AuthRegistrationComponent,
    AuthForgotPassComponent,
    DashboardComponent,
    UserInfoComponent,
    CurrencyExchangeComponent,
    CreateComponent,
    UpdateComponent,
    ViewComponent,
    ListComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpModule,
    RouterModule.forRoot(<any>ROUTES),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    WeatherService,
    UserManagerService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
