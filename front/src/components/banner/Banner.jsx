import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import bannerImg from "../../assets/img/bannerImg.svg";
import './banner.css'


const Banner = () => {
  return (
      <div className="main-container" >
    <section className="banner" id="home">
      <Container>
        <Row className="banner-container">
          <Col xs={12} md={6} xl={7}>
    
            <div className="text">  
                <h1>¿Te Apasionan los Libros y el Orden?</h1>
                  <p>Con Dee organizar tu biblioteca privada está a un solo click.</p>
                  <div className = 'but'>
                  <button onClick={() => console.log('sign-up')}>Comienza Ahora</button>
                  </div>
            </div>   
          
            </Col>
            <Col xs={12} md={6} xl={5}>
            
            <div className="img">
                <img src={bannerImg} alt="Header Img"/>
            </div>
            <div className="circle-form">
              
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      </div>
  )
}
export default Banner;
