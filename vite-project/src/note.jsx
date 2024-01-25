import React from "react";
import './index.css'

export default class Note extends React.Component{
    constructor(props) {
        super(props);
        // to bind the method with event handler without (). 
        this.handleChange = this.handleChange.bind(this);

        this.state =
         { 
            value: ''
        };
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }
render(){
    return(
        <>
        <div className="main">
                <div className="write">
                    <h3>Input</h3>
                   
                    <textarea className="write-text" onChange={this.handleChange} defaultValue={this.state.value}/>
                </div>
                <div className="seen">
                    <h3>Pro Note</h3>
                    <div className="seen-text">{this.state.value}</div>
                </div>                
            </div>
        </>
    )
}
}