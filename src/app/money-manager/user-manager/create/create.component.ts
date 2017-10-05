import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public amountMoneyVal;
  public moneyTaskList;

 // public moneyTaskList: FirebaseListObservable<any[]> = this.angularFireDatabase.list('/amountMoney');


  public createSpendMoneyForm: FormGroup = new FormGroup({
    amountMoney: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
    date: new FormControl('', []),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
  });

  constructor(public userManagerService: UserManagerService,
              public angularFireDatabase: AngularFireDatabase,
              @Inject(FirebaseApp) firebaseApp: any) {

    userManagerService.getList().then((res: any[]) => {
      this.moneyTaskList = res;
    });
    console.log(this.amountMoneyVal);
  }

  public createSpendMoney() {
    event.preventDefault();

    this.amountMoneyVal = this.createSpendMoneyForm.value;
    this.userManagerService.addMoneyTask(this.amountMoneyVal);

    console.log(this.amountMoneyVal);
  }

  ngOnInit() {
  }

}
