import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { log } from 'util';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css'],
})
export class CurrencyExchangeComponent implements OnInit {
  public results: any = {};
  public baseUrl: string = 'http://resources.finance.ua/ru/public/currency-cash.json';
  public url;
  public ratesData: any = [];
  public cars = ["Saab", "Volvo", "BMW"];

  constructor(private http: Http) {
    this.letSearch();
    this.getRates();

    let x = this.cars.filter((val, i, cars) => {


      return val === 'Volvo';
    });
    console.log(x);

  }


  // Get http result
  public letSearch() {
    this.url = "http://api.fixer.io/latest";
    return this.http.get(this.url).map((res) => {
      return res.json()
    }).subscribe(
      data => {
        for (let key in data.rates) {
          this.ratesData.push({label: key, value: data.rates[key]});
        }

        console.log(this.results.rates, 'data');
      },
      error => console.log(error),
      () => console.log("Fine !")
    )
  }


  public getRates() {

  }


  ngOnInit() {
  }


}


