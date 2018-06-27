import {Injectable} from 'angular2/core'
import { WEATHER_ITEMS } from './weather.data';

//Injectable  - used when you going to use http,to inject a service or inject other services to this service
@Injectable()
export class WeatherService
{
    getWeatherItems()
    {
        return WEATHER_ITEMS;
    }

}