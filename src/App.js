import React from "react";
import Titles from "./components/Title"
import Form from "./components/Form"
import Weather from './components/Weather'

const API_KEY = "12ac05330337a57ab7199ec9f4d9b192";

class App extends React.Component{
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }  

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
    const data = await api_call.json();
    if (city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "" 
      });
    }
    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter city and country name"
      });
    }
  }


  render(){
    return(
     <div>
       <Titles /> 
       <Form getWeather={this.getWeather}/>
       <Weather
       temperature = {this.state.temperature}
       error = {this.state.error}
       city = {this.state.city}
       country = {this.state.country}
       hummidity = {this.state.humidity}
       description = {this.state.description} 
       />
     </div>
    );
  }
}


export default App;