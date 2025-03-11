import { Component } from '@angular/core';
import { Router } from '@angular/router';
//services
import { WeatherService } from '../../services/weather.service';
import { CountryENService } from '../../services/country-en.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
constructor( 
  private router: Router,
  private weatherService: WeatherService,
  private countryENService: CountryENService
) { }

country:string = ''
city:string = ''
//data EN
countryEN:string = ''
cityEN:string = ''
//data weathwe 
dataWeather:any = {}
//visible
visible:boolean = false
visibleLoader:boolean = false

alertCountry() {
  if(this.city == ''){
    alert('Es necesario escribir una ciudad.')
    return;
  }
  if(this.country == ''){
    alert('Es importante escribir un país.')
    return;
  }
  if(this.country != '' && this.city != ''){
    //visible loader
    this.visibleLoader = true
    //call service country EN 
    this.countryENService.getCountry(this.country, this.city).subscribe(
      (res) => {
        this.countryEN = res.results[0].components.country;
        this.cityEN = res.results[0].components.city || res.results[0].components.state;
        //call function get weather
        this.getWeather()
      },
      (err) => console.log(err)
    );
  }
}
// get weather
getWeather() {
  console.log(this.cityEN+' '+this.countryEN);
  
   //call service weather
   if(this.countryEN != '' && this.cityEN != ''){
    //call service weather
    this.weatherService.getWeather(this.cityEN, this.countryEN).subscribe(
     res => {
       this.dataWeather = res
        this.visible = true
        this.visibleLoader = false
     },
     err => console.log(err)
   )
     }
}

}
