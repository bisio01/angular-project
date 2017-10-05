import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {
  private  domain: string = 'http://api.apixu.com/v1/current.json';
  private apiKey: string = 'ca3f0f7095f74ac5b2e154634170310';

  constructor(private http: Http) {
  }

  getByCity(city: string) {
    return this.http.get(`${this.domain}?key=${this.apiKey}&q=${city}`)
      .map((res) => {
        return res.json()
      })
  }
}
