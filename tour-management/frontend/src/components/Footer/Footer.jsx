import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png';

const quick_link = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/yourtimeshare',
    display: 'Post Your Timeshare'
  },
  {
    path: '/tours',
    display: 'Timeshare Rentals'
  },
];

const quick_links2 = [
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  },
];

const Footer = () => {

  const year = new Date().getFullYear()

  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>DUma no met vaicaloz thuc toi sang</p>
            <div className='social__links d-flex align-items-center gap-4'>
              <span>
                <Link to='#'><i class="ri-youtube-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-facebook-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-instagram-line"></i></Link>
              </span>
            </div>
          </div>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Discover</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick_link.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick_link.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Contacts</h5>
          <ListGroup className='footer__quick-links'>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6>
                <span className='mb-0 d-flex align-items-center gap-2'>
                  <i class="ri-map-pin-line"></i>
                  Address:
                </span>
                <p className='mb-0'> Nha` Van Hoa Thanh Nien </p>
              </h6>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6>
                <span className='mb-0 d-flex align-items-center gap-2'>
                  <i class="ri-mail-line"></i>
                  Email:
                </span>
                <p className='mb-0'> Bomaylaptrinh@gmail.com </p>
              </h6>
            </ListGroupItem>
            <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
              <h6>
                <span className='mb-0 d-flex align-items-center gap-2'>
                  <i class="ri-phone-line"></i>
                  Phone:
                </span>
                <p className='mb-0'> 0917497476 </p>
              </h6>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col lg='12' className='text-center pt-5'>
          <p className='copyright'>Copyright {year}, design and developer HackerXuanTinh. All rights reserved</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer