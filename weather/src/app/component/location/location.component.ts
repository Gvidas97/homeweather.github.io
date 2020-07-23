import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { ActivatedRoute } from '@angular/router';
import { Weather } from 'src/app/models/weather';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit, OnDestroy {

  city: string;
  weather: Weather;
  sub: Subscription;

  constructor(private weatherService:WeatherService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'];
    });
    this.getWeather();
  }

  getWeather(){
    this.sub = this.weatherService.getWeatherByCity(this.city).subscribe(data => {
      this.weather = data;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
