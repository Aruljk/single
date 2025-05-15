import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'

const Footer = () => {
  return (
    <footer className="py-4 mt-5 footer-sec">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We serve delicious meals with top-quality ingredients and unmatched service.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Info</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +91 98765 43210</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0">© {new Date().getFullYear()} Foodie. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
