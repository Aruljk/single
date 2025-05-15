import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faSolidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import chef1 from '../Home/chef-1.png.webp';
import chef2 from '../Home/chef-2.png.webp';
import chef3 from '../Home/chef-3.png.webp';

const testimonials = [
  {
    image: chef1,
    name: 'John Doe',
    message: 'This service is outstanding! Highly recommended.',
    rating: 5,
  },
  {
    image: chef2,
    name: 'Jane Smith',
    message: 'Amazing experience, will definitely come back.',
    rating: 4,
  },
  {
    image: chef3,
    name: 'Emily Johnson',
    message: 'Great quality and customer support.',
    rating: 5,
  },
 
  
];

const renderStars = (rating) =>
  Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={index < rating ? faSolidStar : faRegularStar}
      className="text-warning me-1"
    />
  ));

const TestimonialSlider = () => {
  return (
    <Container className="my-5">
      <div class="section-intro mb-75px">
        <h4 class="intro-title">Our Chef</h4>
        <h2>Talent &amp; experience member</h2>
      </div>
          <Row>
            {testimonials.map((item, index) => (
              <Col md={6} sm={12} lg={4} key={index} className='testi-con-sec'>
                <Card className="text-center p-3 border-0 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle mx-auto"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Text>"{item.message}"</Card.Text>
                    <div>{renderStars(item.rating)}</div>
                    <Card.Subtitle className="text-muted mt-2">{item.name}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
      
    </Container>
  );
};

export default TestimonialSlider;
