import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6} className = 'logo-cont'>
            <AutoStoriesIcon className = 'icon'/>               
            <h3 className = 'logo'>Dee</h3>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/"><FacebookIcon /></a>
              <a href="/"><InstagramIcon/></a>
              <a href="/"><LinkedInIcon /></a>
            </div>
            <p>
              <CopyrightIcon/>
              Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer