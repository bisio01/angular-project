import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserManagerService {
  public amountMoneyData: FirebaseListObservable<any[]> = this.angularFireDatabase.list('/amountMoney');
  public moneyCategoryData: FirebaseListObservable<any[]> = this.angularFireDatabase.list('/categoryMoney');

  _categoryData: BehaviorSubject<any[]> = new BehaviorSubject([]);
  categoryData: Observable<any[]> = this._categoryData.asObservable();

  uid: string = '';
  agencyItems: FirebaseListObservable<any[]>;
  trackerItems: FirebaseListObservable<any[]>;
  agencyID: any[] = [];


  constructor(private http: Http, public angularFireDatabase: AngularFireDatabase) {
    console.log(this.moneyCategoryData);
    console.log(this.amountMoneyData, 'amountMoneyData');
  }

  public addMoneyTask(data) {
    this.amountMoneyData.push({
      name: data.name,
      value: data.amountMoney,
      date: data.date,
      description: data.description,
      category: data.moneyCategory
    });
  }

  public addCategoryData(data) {
    let uuid = this.guid();

    this.moneyCategoryData.push({
      value: data,
      id: uuid
    });
  }

  public addSubCategoryData(data, parentId) {
    let uuid = this.guid();
    this.moneyCategoryData.push({
      id: uuid,
      value: data,
      parentId: parentId
    });

  }


  public getList() {
    return new Promise((resolve, reject) => {
      if (this.amountMoneyData) {
        resolve(this.amountMoneyData)
      } else {
        reject();
      }

    })
  }

  public getCategoryList() {
    return new Promise((resolve, reject) => {
      if (this.moneyCategoryData) {
        resolve(this.moneyCategoryData)
      } else {
        reject();
      }
    })
  }

  public getSubCategoryList() {
    return new Promise((resolve, reject) => {
      if (this.moneyCategoryData) {
        resolve(this.moneyCategoryData)
      } else {
        reject();
      }
    })
  }

  public guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4();
  }


  public loadCategoryData() {
    this.agencyItems = this.angularFireDatabase.list('/categoryMoney/', {preserveSnapshot: true});
    this.agencyItems.subscribe(snapshots => {
      this._categoryData.next(

        snapshots.map(sn => {

          return {
            ...sn.val(),
            subCategory: snapshots.filter(el => el.val().parentId == sn.val().id).map(el => el.val())
          }
        }).filter(el => !el.hasOwnProperty('parentId'))
      )
    });
  }

  /*public getTrackerData() {
    for (let i = 0; i < this.agencyID.length; i++) {
      console.log("Fetching Tracker data");
      this.trackerItems = this.angularFireDatabase.list('/amountMoney/' + this.agencyID[i]);
      this.trackerItems.subscribe(trackerItems => trackerItems.forEach(Titem =>
        console.log("Tracker name: " + Titem.name),
      ));
    }
  }*/


}
