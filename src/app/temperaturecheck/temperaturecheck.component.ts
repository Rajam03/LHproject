import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { temperaturecheckService } from './temperaturecheck.service';
import { catchError, switchMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-temperaturecheck',
  templateUrl: './temperaturecheck.component.html',
  styleUrls: ['./temperaturecheck.component.css']
})
export class TemperaturecheckComponent implements OnInit {
  private baseWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private urlSuffix = "&units=metric&appid=26170d9b42350bcd282c0c728db0408e";
  form: FormGroup;
  submitted: boolean;
  value: any;
  Value:any;
  weather: string;
  headers: any;
  params:any;
  data: any;
  stateerror="";
  datas:any;
  a: any;
  statedetails: any;
  citydetails: any;
  fore: any;
  allcities: any;
  
  constructor(private temperatureservice: temperaturecheckService, private http: HttpClient) {
    this.form = new FormGroup({
      state: new FormControl('',[Validators.required]),
      city: new FormControl('', [Validators.required])
    })
  }

  get f() { return this.form.controls; }

  selectstate(state) {
  
  // console.log("hai");
    this.datas=state.value;
    console.log(this.datas);
// this.City();

   if(this.datas){
    this.City();
    console.log(this.citydetails);
   }
   else{
     this.AllCities();
   }
  
    
  }
 
  ngOnInit() {
    this.form.controls.city.valueChanges
      .pipe(
        switchMap(city => this.getWeather(city)))
      .subscribe(
        res => {
          this.weather =
            `Current temperature is  ${res['main'].temp}C `
        }
      );
   
      this.state();
      this.AllCities();
  }
    
state(){
  this.headers = new Headers();
  this.headers.append("X-CSCAPI-KEY", "cHY4U2owV0djZFZPWFNvb0xFV1Q5bmpLS3ZzWUx0RGw2cDI3QmwxYg==");
  
  var requestOptions = {
    method: 'GET',
    headers: this.headers
  };

  fetch("https://api.countrystatecity.in/v1/countries/IN/states", requestOptions)
    .then(response =>
      response.text())
    .then((result:any) => {
      this.statedetails=JSON.parse(result);
      console.log(this.statedetails);
       });
}
City(){
  this.headers = new Headers();
  this.headers.append("X-CSCAPI-KEY", "cHY4U2owV0djZFZPWFNvb0xFV1Q5bmpLS3ZzWUx0RGw2cDI3QmwxYg==");
  var requestOptions = {
    method: 'GET',
    headers: this.headers,
    
  };
      fetch(`https://api.countrystatecity.in/v1/countries/IN/states/${this.datas}/cities`, requestOptions)
    .then(response =>
      response.text())
    .then((result) => {
      this.citydetails=JSON.parse(result);
      console.log(this.citydetails);
       }); 
      
        console.log(this.citydetails);
       
       
}
AllCities(){
  this.headers = new Headers();
  this.headers.append("X-CSCAPI-KEY", "cHY4U2owV0djZFZPWFNvb0xFV1Q5bmpLS3ZzWUx0RGw2cDI3QmwxYg==");
  var requestOptions = {
    method: 'GET',
    headers: this.headers,
    
  };
      fetch('https://api.countrystatecity.in/v1/countries/IN/cities', requestOptions)
    .then(response =>
      response.text())
    .then((result) => {
      this.citydetails=JSON.parse(result);
      console.log(this.citydetails);
       }); 
      
}
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