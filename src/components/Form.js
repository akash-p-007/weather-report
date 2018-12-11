import React from "react";

class Form extends React.Component{
    render(){
        return(
          <form>
            <input type="text" placeholder="
            Enter your city" />
            <input type="text" placeholder="
            Enter your country" />
          </form>       
        );
    }
}

export default Form;