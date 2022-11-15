import React, { Component, Fragment } from "react";
import MetaData from "../../components/layouts/Metadata";
import Navbar from "../../components/navbar/Navbar";
import './signUp.css'


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  render() {
      return (
        <div className="login-container">
        <Navbar/>
            <div className='container d-flex justify-content-center align-items-center card-container'>    
            <Fragment>
                <MetaData title={'Sign Up'} />            
                <div className='signup-wrapper'>                
                <div className='card-header'>
                    <form onSubmit={this.handleSubmit}>
                    <div className="text-center my-4 name">
                            Create Account
                        </div>
                    <div className='card-content'>
                        
                        <div className="col-md-6 form-field">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            onChange={(e) => this.setState({ fname: e.target.value })}
                            />
                        </div>

                        <div className="col-md-6 form-field">
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            onChange={(e) => this.setState({ lname: e.target.value })}
                            />
                        </div>
                        
                        <div className="col-md-6 form-field">                
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                        </div>

                        <div className="col-md-6 form-field">                
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                        </div>
                    </div>
                    <div className="d-grid">
                        <button type="submit" className="signup-btn mt-4">
                        Sign Up
                        </button>
                    </div>
                    <p className="forgot-password text-center mt-4">
                        Already registered? <a href="/sign-in">Sign in here</a>
                    </p>
                    </form>
                </div>
                </div>
            </Fragment>
        </div>
    </div>
    );
  }
}