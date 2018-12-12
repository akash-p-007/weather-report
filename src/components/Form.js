import React from "react";

const Form = (props) => (
          <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="
            Enter your city" />
            <button>Fetch</button>
          </form>       


);
export default Form;