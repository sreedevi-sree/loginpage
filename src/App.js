

import "./index.css";
import React, { Component } from "react";

class App extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else  {
      alert("Successfully logged in");
     
    } 
  };

  handleClick = e => {
    e.preventDefault();

    alert("Go to registration page");
  };

  render() {
    return (
      <div className="App">
            <div className="col-lg-12 col-md-6 col-sm-2" >

            <h1>LOGIN PAGE</h1>
            <div className="loginPage">
            <div className="image col-lg-6  col-sm-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgjM3_nvS_uvUPuovtzQJD_8nSFaZFWPmu7Q&usqp=CAU" alt=""></img>
            </div>
            <div className="inputform col-lg-6  col-sm-1">
            <form className="form" >
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Enter the email address" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter the password" />
          </div>
          <button className="primary" onClick={this.handleSubmit}>LOGIN</button>
          <button className="secondary" onClick={this.handleClick}>
          sign up
        </button>
        </form>
            </div>
            </div>
            
        
        </div>
      </div>
    );
  }
}

export default App;
