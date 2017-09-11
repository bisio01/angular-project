import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ROUTES } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


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
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(<any>ROUTES),
    ReactiveFormsModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
