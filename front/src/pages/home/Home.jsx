import React, { Fragment, useEffect } from 'react';
import MetaData from "../../components/layouts/Metadata";
import Navbar from "../../components/navbar/Navbar";
import Banner from '../../components/banner/Banner';
import Footer from '../../components/footer/Footer'
import Contact from '../../components/contact/Contact';

const Home = () => { 
    return (
        <Fragment>
        <div className='nav-container'>
            <Navbar />
        </div>
            <Banner />
            <MetaData title={'Home'} />
            <Contact/>
            <Footer/>
        </Fragment>
            
                    
        
    
    )

}
export default Home