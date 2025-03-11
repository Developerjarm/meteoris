import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 
private apikey = '06ce7fd6ecc74a30ab023002252302' 
private apiurl = 'http://api.weatherapi.com/v1/current.json'

  constructor( private http:HttpClient) { }

  getWeather(city:string, country:string):Observable<any>{
    let countrym = city + ',' + country
    return this.http.get(`${this.apiurl}?key=${this.apikey}&q=${countrym}&aqi=no&lang=es`)
  }


}
