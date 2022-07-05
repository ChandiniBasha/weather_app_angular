import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})

export class WeatherCardComponent implements OnInit {
  constructor(private http : HttpClient){}

  cityName: string = '';
  result: any;
  fetchedData = false;
  weather : any;
  clicked = false;
  error : any;

ngOnInit(): void {}

  weatherData(event: any) {
    this.cityName = event.target.value;
  
    const url = encodeURI(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=f1e82b1443e6d5a7bcc4994238e57f72`);
    this.http.get(url).subscribe((response) => {
      this.result = response;
      this.weather = this.result.weather[0].main;
      console.log(this.result);
    },
    
    (error)=>{
      this.error = error;
      console.log(error,'error');
    });
    
    if (this.result.cod === 200) {
      this.fetchedData = true;
    }else{
      this.fetchedData = false;
    }

    this.clicked = false;
  }

  getBackground(){
    switch (this.weather) {
      case 'Clouds':
        return 'https://images.unsplash.com/photo-1506563805286-a52f937ec9ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      case 'Rain':
        return 'https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      case 'Haze':
        return 'https://images.unsplash.com/photo-1554511491-0f21bacd5ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
      case 'Thunderstorm':
        return 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      case 'Drizzle':
        return 'https://images.unsplash.com/photo-1541919329513-35f7af297129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      case 'Snow':
        return 'https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80'
      case 'Clear':
        return 'https://images.unsplash.com/photo-1454335459109-cd8a2c230bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80'
      case 'Mist':
        return 'https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      default:
        return '';
    }
  //   if(this.weather == 'Clouds'){
  //     return 'https://images.unsplash.com/photo-1506563805286-a52f937ec9ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  //   } 
  //   else if(this.weather == 'Rain'){
  //     return 'https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  //   }
  //   else if(this.weather == 'Haze'){
  //     return 'https://images.unsplash.com/photo-1554511491-0f21bacd5ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
  //   }
  //   else if(this.weather == 'Thunderstorm'){
  //     return 'https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  //   }
  //   else if(this.weather == 'Drizzle'){
  //     return 'https://images.unsplash.com/photo-1541919329513-35f7af297129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  //   }
  //   else if(this.weather == 'Snow'){
  //     return 'https://images.unsplash.com/photo-1485594050903-8e8ee7b071a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80'
  //   }
  //   else if(this.weather == 'Clear'){
  //     return 'https://images.unsplash.com/photo-1454335459109-cd8a2c230bc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80'
  //   }
  //   else{
  //     return ''
  //   }
  // }

}
}
