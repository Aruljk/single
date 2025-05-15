import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Home/hero-banner1.png.webp';
import image2 from '../Home/hero-banner2.png.webp';
import aboutimage from '../Home/about-img1.png.webp';
import aboutimage1 from '../Home/about-img2.png.webp';
import featured1 from '../Home/featured1.png.webp';
import featured2 from '../Home/featured2.png.webp';
import featured3 from '../Home/featured3.png.webp';
import blog1 from '../Home/blog1.png.webp';
import blog2 from '../Home/blog2.png.webp';
import blog3 from '../Home/blog3.png.webp';
import food1 from '../Home/food1.png.webp';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Testimonialsec from '../Testimonails/Testimonials';


import './home.css';
const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (

    <Container>
        
        <section className='home-sec'>
      <Row className="align-items-center">
        <Col md={6} className='responsive-mob'>
          <h1 className='hero-title'>
            Foods arul <br />
            most precious things
          </h1>
          <div class="d-sm-flex flex-wrap">
          <a class="button button-hero button-shadow" href="#">Book Now</a>
          <a class="hero-banner__video" href="http://www.youtube.com/watch?v=0O2aH4XLbto">Watch Video</a>          
        </div>
        </Col>
        <Col md={6}>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img src={image1}  alt="First slide" className="d-block w-100 img-fluid" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={image2} alt="Second slide" className="d-block w-100 img-fluid" />
            </Carousel.Item>
            <Carousel.Item>
              <img src={image1} alt="Third slide" className="d-block w-100 img-fluid" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      </section>

<section className='about-section'>
<div className='about-content'>
<Row>
    <Col md={6}>
    <div class="img-styleBox">
            <div class="styleBox-border">
              <img class="styleBox-img1 img-fluid" src={aboutimage} alt=""/>
            </div>
            <img class="styleBox-img2 img-fluid" src={aboutimage1} alt=""/>
          </div>
    </Col>
    <Col md={6}>
    <div>
    <div class="section-intro mb-lg-4" id="sec-intro">
            <h4 class="intro-title">About Us</h4>
            <h2>We speak the good food language</h2>
          </div>
          <p>Living first us creepeth she'd earth second be sixth hath likeness greater image said sixth was without male place fowl evening an grass form living fish and rule lesser for blessed can't saw third one signs moving stars light divided was two you him appear midst cattle for they are gathering.</p>
          <a class="button button-shadow mt-2 mt-lg-4" href="#">Learn More</a>
    
    </div>
    </Col>
</Row>
</div>
</section>

<section className='menu-section'>
<div className='menu-content'>
<div class="section-intro mb-75px">
        <h4 class="intro-title">Featured Food</h4>
        <h2>Fresh taste and great price</h2>
      </div>
    <Row>
        <Col md="4">
        <Card className='card-sec'>
      <Card.Img variant="top" src={featured1} />
      <Card.Body>
      <div class="item-body">
            <a href="#">
              <h4>Pulled Sandwich</h4>
            </a>
            <p>Whales and darkness moving</p>
            <div class="d-flex justify-content-between">
            <ul className="rating-star">
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
    </ul>
              <h3 class="price-tag">$30</h3>
            </div>
          </div>
      </Card.Body>
    </Card>
        </Col>
        <Col md="4">
        <Card className='card-sec' >
      <Card.Img variant="top" src={featured2} />
      <Card.Body>
      <div class="item-body">
            <a href="#">
              <h4>Mountain Mike Pizza</h4>
            </a>
            <p>Whales and darkness moving</p>
            <div class="d-flex justify-content-between">
            <ul className="rating-star">
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
    </ul>
              <h3 class="price-tag">$30</h3>
            </div>
          </div>
      </Card.Body>
    </Card>
        </Col>
        <Col md="4">
        <Card className='card-sec' >
      <Card.Img variant="top" src={featured3}/>
      <Card.Body>
      <div class="item-body">
            <a href="#">
              <h4>Patatas Bravas</h4>
            </a>
            <p>Whales and darkness moving</p>
            <div class="d-flex justify-content-between">
            <ul className="rating-star">
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
      <li><FontAwesomeIcon icon={faStar} /></li>
    </ul>
              <h3 class="price-tag">$30</h3>
            </div>
          </div>
      </Card.Body>
    </Card>
        </Col>
    </Row>
</div>
</section>

<section className='food-menu'>
    <div className='food-con'>
    <div class="section-intro mb-75px">
        <h4 class="intro-title">Food Menu</h4>
        <h2>Delicious food</h2>
      </div>
        <Row>
        <div class="col-lg-6">
          <div class="media align-items-center food-card">
            <img class="mr-3 mr-sm-4" src={food1} alt=""/>
            <div class="media-body">
              <div class="d-flex justify-content-between food-card-title">
                <h4>Roasted Marrow</h4>
                <h3 class="price-tag">$32</h3>
              </div>
              <p>Whales and darkness moving form cattle</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="media align-items-center food-card">
            <img class="mr-3 mr-sm-4" src={food1} alt=""/>
            <div class="media-body">
              <div class="d-flex justify-content-between food-card-title">
                <h4>Roasted Marrow</h4>
                <h3 class="price-tag">$32</h3>
              </div>
              <p>Whales and darkness moving form cattle</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="media align-items-center food-card">
            <img class="mr-3 mr-sm-4" src={food1} alt=""/>
            <div class="media-body">
              <div class="d-flex justify-content-between food-card-title">
                <h4>Roasted Marrow</h4>
                <h3 class="price-tag">$32</h3>
              </div>
              <p>Whales and darkness moving form cattle</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="media align-items-center food-card">
            <img class="mr-3 mr-sm-4" src={food1} alt=""/>
            <div class="media-body">
              <div class="d-flex justify-content-between food-card-title">
                <h4>Roasted Marrow</h4>
                <h3 class="price-tag">$32</h3>
              </div>
              <p>Whales and darkness moving form cattle</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="media align-items-center food-card">
            <img class="mr-3 mr-sm-4" src={food1} alt=""/>
            <div class="media-body">
              <div class="d-flex justify-content-between food-card-title">
                <h4>Roasted Marrow</h4>
                <h3 class="price-tag">$32</h3>
              </div>
              <p>Whales and darkness moving form cattle</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="media align-items-center food-card">
            <img class="mr-3 mr-sm-4" src={food1} alt=""/>
            <div class="media-body">
              <div class="d-flex justify-content-between food-card-title">
                <h4>Roasted Marrow</h4>
                <h3 class="price-tag">$32</h3>
              </div>
              <p>Whales and darkness moving form cattle</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="media align-items-center food-card">
            <img class="mr-3 mr-sm-4" src={food1} alt=""/>
            <div class="media-body">
              <div class="d-flex justify-content-between food-card-title">
                <h4>Roasted Marrow</h4>
                <h3 class="price-tag">$32</h3>
              </div>
              <p>Whales and darkness moving form cattle</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="media align-items-center food-card">
            <img class="mr-3 mr-sm-4" src={food1} alt=""/>
            <div class="media-body">
              <div class="d-flex justify-content-between food-card-title">
                <h4>Roasted Marrow</h4>
                <h3 class="price-tag">$32</h3>
              </div>
              <p>Whales and darkness moving form cattle</p>
            </div>
          </div>
        </div>
        </Row>
    </div>

</section>
<section className='testimonails-sec'>
<Testimonialsec/>
</section>

<section className='blog-section'>
<div className='menu-content'>
<div class="section-intro mb-75px">
        <h4 class="intro-title">Our Blog</h4>
        <h2>Latest food and recipe news</h2>
      </div>
    <Row>
        <Col md="4">
        <Card className='card-sec'>
      <Card.Img variant="top" src={blog1} />
      <Card.Body>
      <div class="blog-body">
              <ul class="blog-info">
                <li className='first-list'><a href="#">Admin post</a></li>
                <li><a href="#">Jan 10, 2019</a></li>
              </ul>
              <a href="#">
                <h3>Huge cavity in antarctic glacie signals rapid</h3>
              </a>
            </div>
      </Card.Body>
    </Card>
        </Col>
        <Col md="4">
        <Card className='card-sec' >
      <Card.Img variant="top" src={blog2} />
      <Card.Body>
      <div class="blog-body">
              <ul class="blog-info">
                <li><a href="#">Admin post</a></li>
                <li><a href="#">Jan 10, 2019</a></li>
              </ul>
              <a href="#">
                <h3>Researcher unearths age
                    in the desert</h3>
              </a>
            </div>
      </Card.Body>
    </Card>
        </Col>
        <Col md="4">
        <Card className='card-sec' >
      <Card.Img variant="top" src={blog3}/>
      <Card.Body>
      <div class="blog-body">
              <ul class="blog-info">
                <li><a href="#">Admin post</a></li>
                <li><a href="#">Jan 10, 2019</a></li>
              </ul>
              <a href="#">
                <h3>High-protein rice brings
                    value, nutrition</h3>
              </a>
            </div>
      </Card.Body>
    </Card>
        </Col>
    </Row>
</div>
</section>


    </Container>


  );
};

export default Home;
