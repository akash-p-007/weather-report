import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city  &&  <p>Place: {this.props.city},{this.props.country} </p>}
                {this.props.city  &&  <p>Temperature: {this.props.temperature} </p>}
                {this.props.city  &&  <p>Humidity: {this.props.humidity} </p>}
                {this.props.city  &&  <p>Description: {this.props.description} </p>}
                <p className="error">{this.props.error} </p>
            </div>
        );
    }
}

export default Weather;