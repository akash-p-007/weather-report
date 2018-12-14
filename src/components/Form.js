import PropTypes from "prop-types"
import React from "react";
import GoogleMapLoader from "react-google-maps-loader"
import GooglePlacesSuggest from "react-google-places-suggest"

const MY_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

class Form extends React.Component{
  state = {
    search: "",
    value: "",
  }

  handleInputChange = e => {
    this.setState({search: e.target.value, value: e.target.value})
  }

  handleSelectSuggest = (geocodedPrediction, originalPrediction) => {
    console.log(geocodedPrediction, originalPrediction)
    this.setState({search: "", value: geocodedPrediction.formatted_address})
  }
  render(){

    const {search, value} = this.state
    
    return(
      <GoogleMapLoader
        params={{
        key: MY_API_KEY,
        libraries: "places,geocode",
        }}
        render={googleMaps =>
        googleMaps && (
        <GooglePlacesSuggest
          googleMaps={googleMaps} 
                          autocompletionRequest={{
                              input: search,
                          }}
                          onSelectSuggest={this.handleSelectSuggest}>

        <form onSubmit={this.props.getWeather}>
          <input type="text" name="city" placeholder="
          Enter your city" value={value} onChange={this.handleInputChange.bind(this)} />
          <button>Fetch</button>
        </form>  
        </GooglePlacesSuggest>
        )
      }
      />
    );
  }
}

export default Form;