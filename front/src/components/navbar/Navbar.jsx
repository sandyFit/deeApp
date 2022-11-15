import React from 'react'
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './navbar.css'


export default function Navbar() {
    return (
        <header className="header-container"  >
        <nav className="navbar navbar-expand-lg">
        
        <div className="container-fluid">
            <div>
                <Link className="logo-nav mt-3 text-decoration-none " to="/home">
                    <AutoStoriesIcon className = 'icon'/>               
                    <h3 className = 'logo'>Dee</h3>
                </Link>
            </div>
            <div className="collapse navbar-collapse"
                id="navbarSupportedContent">
            
                <ul className="main-nav navbar-nav me-auto d-flex flex-row">
                    <li className="nav-item text-center mx-5 ms-lg-1 mt-lg-0">
                        <Link className="nav-link active" aria-current="page" to="/">
                            <div>
                            <HomeIcon/>
                            </div>
                            Home
                        </Link>
                    </li>
                                   
                    <li className="nav-item text-center w-auto mx-5 ms-lg-1 mt-lg-0">
                        <Link className="nav-link active" to="/contact">
                            <div>
                                <EmailIcon/>               
                            </div>
                            Contact
                        </Link>
                    </li>
        
                    <li className="nav-item text-center mx-5 ms-lg-1 mt-2 navbar-text">
                        <Link className="vvb" aria-disabled="true" to="/login"><span>Sign In</span> 
                            
                        </Link>
                    </li>
                    <li className="nav-item text-center mx-3 ms-lg-1 mt-2 navbar-text">
                        <Link className="vvd" aria-disabled="true" to="/sign-up"><span>My Library</span> 
                            
                        </Link>
                    </li>
                    
                </ul>  
                                        
            </div>
        </div>
        </nav>
    </header>
    );
}
