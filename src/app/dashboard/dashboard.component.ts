import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public results: any = {};
  public baseUrl: string = 'http://resources.finance.ua/ru/public/currency-cash.json';
  public url;
  public ratesData: any = [];
  public cars = ["Saab", "Volvo", "BMW"];
  public current;


  constructor(private http: Http) {

    this.letSearch();
    this.getRates();
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
        console.log(data);

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
