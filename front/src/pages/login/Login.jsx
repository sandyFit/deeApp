import React, { Component, Fragment } from "react";
import MetaData from "../../components/layouts/Metadata";
import Navbar from "../../components/navbar/Navbar";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import './login.css'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  render() {
    return (
      <div className="login-container">
        <Navbar/>
      <div >
        <Fragment>
          <MetaData title={'Sign In'} />
          <div className="login-wrapper">
            <div className="logo">
              <form onSubmit={this.handleSubmit} className="p-3 mt-3">
                <div className="text-center my-4 name">
                      Sign In
                  </div>

                <div className="form-field d-flex align-items-center">
                    <span className="icon">
                      <PersonOutlineIcon/>
                    </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>

                <div className="form-field d-flex align-items-center">
                    <span className="icon">
                      <LockOpenIcon/>
                    </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </div>

                <div className="mb-3 d-flex justify-content-center">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="custom-control-label" htmlFor="customCheck1">
                      Remember me
                    </label>
                  </div>
                </div>

                <div className="d-grid">
                  <button type="submit" className="login-btn">
                    Submit
                  </button>
                </div>
                <div className="text-center mt-3 fs-6">
                      <span >Need an account?</span><a href="/sign-up" className="margin">Sign up here</a>
                </div>
              
              </form>
            </div>
          </div>
          </Fragment>
        </div>
        
      </div>
    );
  }
}
