import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryENService {

  constructor( private http:HttpClient) { }

private apikey = '4d27f53f70bc4248ba945243457a9c91'
private apiurl = 'https://api.opencagedata.com/geocode/v1/json'

getCountry(country:string, city:string):Observable<any>{
  const url = `${this.apiurl}?q=${encodeURIComponent(city)},${encodeURIComponent(country)}&key=${this.apikey}&language=en`;
  return this.http.get<any>(url);
}

}
