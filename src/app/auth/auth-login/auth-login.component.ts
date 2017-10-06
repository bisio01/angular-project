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

  }

  public onSubmitAuth() {
    event.preventDefault();

    let email = this.authForm.value.email;
    let password = this.authForm.value.password;

    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
        this.router.navigate(['/todolist']);
      })
      .catch(err => {
        console.log('Something went wrong:', err.message);
      });
  }



  ngOnInit() {
  }

}
