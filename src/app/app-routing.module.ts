import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
//componets
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CountryComponent } from './components/country/country.component';
import { WeatherResultComponent } from './components/weather-result/weather-result.component';

const routes: Routes = [
  { redirectTo: 'welcome', path: '', pathMatch: 'full' },
  { path: '', component: WelcomeComponent },
  { path: 'Welcome', component: WelcomeComponent },
  { path: 'Country', component: CountryComponent },
  {path: 'WeatherResult', component: WeatherResultComponent},
  { path: '**', component: WelcomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
