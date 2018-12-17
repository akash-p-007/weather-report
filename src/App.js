import React, { Component, Suspense } from "react";
import Titles from "./components/Title"
import Form from "./components/Form"
import "./App.css"
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"

const Weather = React.lazy(() => import("./components/Weather"));
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component{
  
  state = {
    temperature: undefined,
    city: undefined,
    status: undefined,
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
            status: data.weather[0].main,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: "" 
          });
        }
        else{
          this.setState({
            temperature: undefined,
            city: undefined,
            status: undefined,
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
        <div className="container">
          <div className="title-container">
            <Titles />
          </div>   
          <Form getWeather={this.getWeather}/>
          <Suspense fallback={<div>Loading...</div>}>
          <Weather
          temperature = {this.state.temperature}
          error = {this.state.error}
          city = {this.state.city}
          status = {this.state.status}
          humidity = {this.state.humidity}
          description = {this.state.description} 
          />
          </Suspense>
          
        </div>
     </div>
    );
  }
}


export default App;