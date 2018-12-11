import React from "react";

class Form extends React.Component{
    render(){
        return(
          <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="
            Enter your city" />
            <input type="text" name="country" placeholder="
            Enter your country" />
            <button>Fetch</button>
          </form>       
        );
    }
}

export default Form;