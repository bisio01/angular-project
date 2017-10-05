import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserManagerService {
  public amountMoneyData: FirebaseListObservable<any[]> = this.angularFireDatabase.list('/amountMoney');


  constructor(private http: Http, public angularFireDatabase: AngularFireDatabase) {

  }

  public addMoneyTask(data) {
    this.amountMoneyData.push({
      value: data.amountMoney,
      date: data.date,
      description: data.description
    });
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

}
