import {Injectable} from 'angular2/core'
import { WEATHER_ITEMS } from './weather.data';
import { Http } from 'angular2/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { WeatherItem } from './weather-item';

//Injectable  - used when you going to use http,to inject a service or inject other services to this service
@Injectable()
export class WeatherService
{
    constructor(private _http: Http)
    {

    }

    getWeatherItems()
    {
        return WEATHER_ITEMS;
    }

    addWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }

    searchWeatherData(cityName: string): Observable<any>
    {
            return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=dd312d719076159d3d00c7ff908c2a3e&units=metric')
                                .map(response => response.json())
                                .catch(error => {
                                    console.error(error);
                                    return Observable.throw(error.json())
                                });

    }


}