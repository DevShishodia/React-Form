import React, { Component } from "react";

import "./input.css";

class Input extends Component{
  constructor(){
    super();
    this.state= {
      value1 : "",
      value2 : "",
      value3 : "",
    }
    
  }
  handleChange1 = (e) =>{
    this.setState({value1:  e.target.value})
  }
  handleChange2 = (e) =>{
    this.setState({value2: e.target.value})
  }
  handleChange3 = (e) =>{
    this.setState({value3:e.target.value})
  }
    handleSubmit = (e) =>{
      e.preventDefault();
      document.write(`(Username = ${this.state.value1})  (Email = ${this.state.value2}) (Password = ${this.state.value3} ) `)
      console.log("hi");
    }


render(){
    return(
        <div className="Input">
            <div className="heading">
                  <h1>Form</h1>
            </div>
            <div className="container">
               <form onSubmit={this.handleSubmit}>
                     <label>Username</label>
                     <input type="text" value={this.state.value1} onChange={this.handleChange1} name="userName" id="name" placeholder="Enter your name" required/>
                     <label>Email</label>
                     <input type="email" value={this.state.value2} onChange={this.handleChange2} name="userEmail" id="email" placeholder="Enter your email" required/>
                     <label>Password</label>
                     <input type="password" value={this.state.value3} onChange={this.handleChange3} name="userPassword" id="password" placeholder="Enter password" required/>
                     <button type="submit">Submit</button>
                </form>
            </div>
        </div>
     )
  }
}
export default Input;