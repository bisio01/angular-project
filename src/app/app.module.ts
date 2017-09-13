import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    AuthForgotPassComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(<any>ROUTES),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
