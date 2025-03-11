import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '06ce7fd6ecc74a30ab023002252302'; 
  private apiUrl = 'http://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) {}

  getWeather(city: string, country: string): Observable<any> {
    const location = encodeURIComponent(`${city},${country}`);
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${location}&aqi=no&lang=es`;

    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.http.get(url, { headers }).pipe(
      catchError((error) => {
        console.error('Error al obtener el clima:', error);
        return throwError(() => new Error('No se pudo obtener la información del clima'));
      })
    );
  }
}
