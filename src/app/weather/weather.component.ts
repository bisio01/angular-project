import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weatherService';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string;

  public results: any = {};


  constructor(private service: WeatherService) {
  }

  ngOnInit() {
  }

  loadData(city: string = 'Kharkiv') {
    this.service.getByCity(city).subscribe((res) => {
      this.results = res;
    })
  }

}



