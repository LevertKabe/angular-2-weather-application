import {Component, OnInit} from 'angular2/core';
import { WeatherItemComponent } from './weather-item.component';
import { WeatherItem } from './weather-item';
import { WEATHER_ITEMS } from './weather.data';
import { WeatherService } from './weather.service';

//Providers - are simply the type of objects you want to inject
//# - used for local variables in #weatherItems
//[weatherItem] is from inputs meta-data that was declared in weather-items.components. NB same name
@Component({
    selector: 'weather-list',
    template: `
        <section class="weather-list">
            <weather-item *ngFor="#weatherItem of weatherItems" [item]="weatherItem" ></weather-item>
        </section>
    `,
    directives: [WeatherItemComponent]
})

export class WeatherListComponent implements OnInit{
    weatherItems: WeatherItem[];

    constructor(private _weatherService: WeatherService)
    {}

    ngOnInit():any{
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}