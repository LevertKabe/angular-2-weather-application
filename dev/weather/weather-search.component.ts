import { Component, OnInit } from "angular2/core";
import { ControlGroup } from "angular2/common";
import { WeatherService } from "./weather.service";
import { WeatherItem } from "./weather-item";
import { Subject } from "rxjs/Rx";

@Component({
    selector: 'weather-search',
    template: `
        <section class="weather-search">
            <form #f="ngForm" (ngSubmit)="onSubmit(f)">
                <label for="city">City</label>
                <input ngControl="location" type="text" id="city" (input)= "onSearchLocation(input.value)" required #input>
                <button type="submit">Add City</button>
            </form>
            <div>
                <span class="info">City found:</span> {{data.name}}
            </div>
        </section>
    `
})
export class WeatherSearchComponent implements OnInit
{
    private searchStream = new Subject<string>();
    data: any = {};
    constructor(private _weatherService: WeatherService)
    {

    }
    onSubmit(form: ControlGroup)
    {
        this._weatherService.searchWeatherData(form.value.location)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather[0].description, data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                }
            );
    }

    onSearchLocation(cityName: string){
        this.searchStream.next(cityName);
    }

    ngOnInit()
    {
        //switchmap allows to map one stream to another
        //this is called a observable stream
        //NB this functions well without debounce & distinctUntilChanged they both improve on making sure you dont send too mnay http requests 
        //debounce - only react to event after x(300) miliseconds
        //distinctUntilChanged - only use the event when the event is different from the last event
        this.searchStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((input:string) => this._weatherService.searchWeatherData(input))
            .subscribe(
                //in console B Be Ber Berl Berli, console reads and keeps changing output
                data => this.data = data  
                
            );
    }

}