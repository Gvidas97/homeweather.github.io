import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit, OnDestroy {

  lat: number;
  lng: number;
  weather: Weather;
  sub: Subscription;

  constructor(private weatherService:WeatherService) {}
   
  ngOnInit(): void {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.sub = this.weatherService.getWeatherByCoords(this.lat, this.lng).subscribe(data => {
          this.weather = data;
        });
      });
    }
    else {
      alert("Change browser");
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
