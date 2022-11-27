import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {logout} from '../../../actions/userActions'
import { useAlert } from 'react-alert'
import {useDispatch} from 'react-redux'

export default function Sidebar() {

  const alert = useAlert()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
    alert.success("You've been logged out")
  }

  return (
    
    <div className="wrapper">
      <div className="sidebar">
        <div className='dash-title'>
          <Link to="/dashboard" className = 'dash'>
            <DashboardIcon />
            Dashboard
          </Link>
        </div>

          <ul>
            <div className="item1">
              <li className="card-item">
                <Link to="/profile" className='sidebar-link'>
                  <AccountCircleIcon />
                  Profile
                </Link>
              </li>
            
              <ul>
                <li className="card-nav">
                  <Link to='/edit-profile' className='sidebar-link con'>
                    Edit Profile
                  </Link>
                </li>
                <li className="card-nav">
                  <Link to='/settings' className='sidebar-link con'>
                    Settings
                  </Link>
                </li>                        
              </ul>            
            </div>
          
            <div className="item2">
              <li className="card-item">
                <Link to="/books" className='sidebar-link sb-icon'>
                  <MenuBookIcon />
                  Books
                </Link>
              </li>    
              <ul>
                <li className="card-nav">
                  <Link to='/manage-books' className='sidebar-link con'>
                    Manage Books
                  </Link>
                </li>
                <li className="card-nav">
                  <Link to='/book/new' className='sidebar-link con'>
                    Add a Book
                  </Link>
                </li>                        
                <li className="card-nav">
                  <Link to='/editor' className='sidebar-link con'>
                    Take Notes
                  </Link>
                </li>                        
              </ul>
            </div>
          </ul> 
              
          <button onClick={logoutHandler} className="logout">
              Logout
          </button>
        </div>
    </div>
  )
}
