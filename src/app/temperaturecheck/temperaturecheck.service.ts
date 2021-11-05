import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class temperaturecheckService{
  headers = new HttpHeaders()
  .set("X-CSCAPI-KEY", "cHY4U2owV0djZFZPWFNvb0xFV1Q5bmpLS3ZzWUx0RGw2cDI3QmwxYg==");

requestOptions = {

headers: this.headers
};
    private baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    private urlSuffix = "&units=metric&appid=26170d9b42350bcd282c0c728db0408e";
    
    constructor(private http: HttpClient){
        
    }
    // getStates(): Observable<any> {
    //   return this.http.get("https://api.countrystatecity.in/v1/countries/IN/states", this.requestOptions)
    // }
  
    getWeather(city: any): Observable<any> {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
          .pipe(catchError(err => {
            if (err.status === 404) {
              console.log(`City ${city} not found`);
              return EMPTY
            }
          })
          );
      }
      }
