import React from "react";
import Titles from "./components/Title"
import Form from "./components/Form"
import "./App.css"
import Weather from './components/Weather'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

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
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (city && data.cod === 200){
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
            error: "Please enter a valid city"
          });
        }
      })
      .catch(e => console.log(e));
    
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