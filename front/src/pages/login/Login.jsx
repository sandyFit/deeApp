import React, { Fragment, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { login, clearErrors } from "../../actions/userActions"
import { useDispatch, useSelector } from 'react-redux'
import MetaData from "../../components/layouts/Metadata"
import Navbar from "../../components/navbar/Navbar"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import './login.css'



const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isAuthenticated, error, loading } = useSelector(state => state.auth) // same name from the store (auth)

  useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard")
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
    

  }
  
    return (
      <div className="login-container">
        <Navbar/>
      <div >
          <Fragment>
            {loading ? <AutorenewIcon /> : (
              <><MetaData title={'Sign In'} /><div className="login-wrapper">
                <div className="logo">
                  <form className="p-3 mt-3" onSubmit={submitHandler}>
                    <div className="text-center my-4 name">
                      Sign In
                    </div>

                    {/* Email Input */}
                    <div className="form-field d-flex align-items-center">
                      <span className="icon">
                        <PersonOutlineIcon />
                      </span>
                      <input
                        id='email-field'
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    {/* Password Input */}
                    <div className="form-field d-flex align-items-center">
                      <span className="icon">
                        <LockOpenIcon />
                      </span>
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="mb-3 d-flex justify-content-center">
                      <div className="custom-control custom-checkbox">
                        <Link to="/password/forgot" className='float-center mb-4'>Forgot your Password?</Link>
                      </div>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="login-btn">
                        Submit
                      </button>
                    </div>
                    <div className="text-center mt-3 fs-6">
                      <span>Need an account?</span><Link to="/sign-up" className="margin">Sign up here</Link>
                    </div>

                  </form>
                </div>
              </div></>
              
          )}
                    
          </Fragment>
        </div>
        
      </div>
    )
}
export default Login

