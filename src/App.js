import './App.css';
import React from "react";

export class Form extends React.Component{
  handleSubmitClick = () =>{
    const name = this._name.value
  }
  render() {
    return(
        <div>
          <input type="text" ref={input => this._name = input }/>
          <button onClick={this.handleSubmitClick}>Sign Up</button>
        </div>
    )
  }
}

