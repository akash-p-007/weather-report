import React from "react";
import Titles from "./components/Title"
import Form from "./components/Form"

class App extends React.Component{
  render(){
    return(
     <div>
       <Titles /> 
       <Form />
     </div>
    );
  }
}


export default App;