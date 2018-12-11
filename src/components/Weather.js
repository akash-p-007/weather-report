import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city && this.props.country &&  <p>Place: {this.props.city},{this.props.country} </p>}
                {this.props.city && this.props.country &&  <p>Temperature: {this.props.temperature} </p>}
                {this.props.city && this.props.country &&  <p>Humidity: {this.props.humidity} </p>}
                {this.props.city && this.props.country &&  <p>Description: {this.props.description} </p>}
                <p>{this.props.error} </p>
            </div>
        );
    }
}

export default Weather;