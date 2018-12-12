import React from "react";

const Weather = (props) => (
            <div className={props.status}>
                 {props.city  &&  <p>Place: {props.city},{props.country} </p>}
                 {props.city  &&  <p>Temperature: {props.temperature.toFixed() - 273}  &deg;C  </p>}
                 {props.city  &&  <p>Humidity: {props.humidity} </p>}
                 {props.city  &&  <p>Description: {props.description} </p>}
                 <p className="error">{props.error} </p>
             </div>
);

export default Weather;