import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { UserManagerService } from '../user-manager.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  public amountMoneyVal;
  public moneyTaskList;
  public categoryList;
  public addCategory: string;

 // public moneyTaskList: FirebaseListObservable<any[]> = this.angularFireDatabase.list('/amountMoney');


  public createSpendMoneyForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(24),
    ]),
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
    moneyCategory:new FormControl('', [])
  });

  constructor(public userManagerService: UserManagerService,
              public angularFireDatabase: AngularFireDatabase,
              @Inject(FirebaseApp) firebaseApp: any) {

    userManagerService.getList().then((res: any[]) => {
      this.moneyTaskList = res;
    });

    userManagerService.getCategoryList().then((res: any[]) => {
      this.categoryList = res;
    });

    console.log(this.categoryList);
    console.log(this.moneyTaskList);



  }

  public refreshList() {
    this.userManagerService.getCategoryList().then((res: any[]) => {
      this.categoryList = res;
    });

  }


  public addCategoryData()  {
    this.userManagerService.addCategoryData(this.addCategory);

  }

  public createSpendMoney() {
    event.preventDefault();

    this.amountMoneyVal = this.createSpendMoneyForm.value;
    this.userManagerService.addMoneyTask(this.amountMoneyVal);
    console.log(this.createSpendMoneyForm.value);
  }






  ngOnInit() {


  }

}
