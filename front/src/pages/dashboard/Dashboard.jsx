import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';
import Sidebar from '../../components/dashboard/sidebar/Sidebar';
import SearchBar from '../../components/dashboard/searchbar/SearchBar';
import MetaData from '../../components/layouts/Metadata'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Dashboard = () => {
  return (
    <section >
     <div className="cont">
      <div className = 'cont-glass d-flex'>
          <Sidebar />
          
            <div>
              <div className='flex justify-center mt-4'>
              <SearchBar />
              <div className="listContainer">
                <div className="listTitle">
                  <h1 className='text-center my-2 mb-3'>Welcome to Dee Dashboard</h1>

                    <Fragment>
                      <MetaData title={'Dashboard'} />
                        <div className="row pr-4">
                          <div className="col-xl-4 col-sm-6 mb-3">
                              <div className="card text-white bg-danger bg-gradient o-hidden h-100">
                                  <div className="card-body">
                                      <div className="text-center card-font-size">My Book List<br /> <b>123</b></div>
                                  </div>
                                  <Link to="/manage-books" className="card-footer text-white text-decoration-none clearfix small z-1" >
                                      <span className="float-left">See More</span>
                                      <span className="float-end">
                                          <ArrowForwardIosIcon/>
                                      </span>
                                  </Link>
                              </div>
                          </div>

                          <div className="col-xl-4 col-sm-6 mb-3">
                              <div className="card text-white bg-info bg-gradient o-hidden h-100">
                                  <div className="card-body">
                                      <div className="text-center card-font-size">Take Notes<br /> <b>12</b></div>
                                  </div>
                                  <Link className="card-footer text-white text-decoration-none clearfix small z-1" to="/editor">
                                      <span className="float-left">See More</span>
                                      <span className="float-end">
                                          <ArrowForwardIosIcon/>
                                      </span>
                                  </Link>
                              </div>
                          </div>

                          <div className="col-xl-4 col-sm-6 mb-3">
                              <div className="card text-white bg-primary bg-gradient o-hidden h-100">
                                  <div className="card-body">
                                      <div className="text-center card-font-size">Profile<br /> <b>34</b></div>
                                  </div>
                                  <Link className="card-footer text-white text-decoration-none clearfix small z-1" to="/profile">
                                      <span className="float-left">See More</span>
                                      <span className="float-end">
                                          <ArrowForwardIosIcon/>
                                      </span>
                                  </Link>
                              </div>
                          </div>                                                          
                      </div>                            
                    </Fragment>                   
                </div>
              </div>                                  
            </div>        
          </div>    
        </div>
      </div>
    </section>
    
  )
}
export default Dashboard
