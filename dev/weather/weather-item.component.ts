import {Component} from 'angular2/core';
import { WeatherItem } from './weather-item';

@Component({
    selector: 'weather-item',
    template: `
        <article class="weather-element">
            <div class="col-1">
                <h3>{{ weatherItem.cityName }}</h3>
                <p class="info">{{ weatherItem.description }}</p>
            </div>
            <div class="col-2">
                <span class="temperature">{{ weatherItem.temperture }}°C</span>
            </div>
        </article>
    `,
    styleUrls: ['src/css/weather-item.css'],
    //inputs - states which properties of this compoenent are binded to this property
    //inputs : - sets a new alias for weatherItem for other compoenents- this is for name confusion 
    inputs: ['weatherItem: item']
})
export class WeatherItemComponent {
    weatherItem: WeatherItem

}