import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  loginList: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  public authForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(public router: Router,
              public angularFireDatabase: AngularFireDatabase,
              public angularFireAuth: AngularFireAuth,) {
    this.loginList = angularFireDatabase.list('/user');
    this.user = angularFireAuth.authState;
    console.log(this.user, 'qweqwe');
  }

  public login(login: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(login, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }

  public onSubmitAuth() {
    this.login(this.authForm.value.email, this.authForm.value.password);
    this.router.navigate(['/todolist']);

  }

  ngOnInit() {
  }

}
