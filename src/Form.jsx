import React from "react";

export class NameForm extends React.Component{
    constructor() {
        super();
        this.state = {
            name: '',
        }
    }
    handleNameChange=(e)=>{
          this.setState({name: e.target.value})
    }
    render() {
        return(
            <div>
                <input type="text" onChange={this.handleNameChange} value={this.state.name}/>
            </div>
        )
    }
}