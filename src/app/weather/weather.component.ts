import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string;
  yourCityResults: string;

  public results: any = {};


  constructor(private weatherService: WeatherService) {
    this.yourCity();

  }

  ngOnInit() {
  }

  loadData(city) {
    this.weatherService.getByCity(city).subscribe((res) => {
      this.results = res;
    })
  }

   yourCity(city: string = 'Kharkiv') {
    this.weatherService.getByCity(city).subscribe((res) => {
      this.yourCityResults = res;
    })
  }

}



