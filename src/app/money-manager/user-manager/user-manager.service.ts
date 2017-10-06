import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserManagerService {
  public amountMoneyData: FirebaseListObservable<any[]> = this.angularFireDatabase.list('/amountMoney');
  public moneyCategoryData: FirebaseListObservable<any[]> = this.angularFireDatabase.list('/categoryMoney');


  constructor(private http: Http, public angularFireDatabase: AngularFireDatabase) {
    console.log(this.moneyCategoryData);
    console.log(this.amountMoneyData, 'amountMoneyData');
  }

  public addMoneyTask(data) {
    this.amountMoneyData.push({
      name: data.name,
      value: data.amountMoney,
      date: data.date,
      description: data.description
    });
  }

  public addCategoryData(data) {
    this.moneyCategoryData.push({
      value: data
    })
  }


  public getList() {
    return new Promise((resolve, reject)=> {
      if(this.amountMoneyData) {
        resolve(this.amountMoneyData)
      } else {
        reject();
      }

    })
  }

  public getCategoryList() {
    return new Promise((resolve, reject)=> {
      if(this.moneyCategoryData) {
        resolve(this.moneyCategoryData)
      } else {
        reject();
      }

    })
  }

}
