import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import service1 from "../Home/service1.png";
import service2 from "../Home/service2.png";
import service3 from "../Home/service3.png";
import image1 from "../Home/contact.png";
import './contact.css';

const Contact = () => {

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  if (!form.checkValidity()) {
    form.reportValidity(); 
    return;
  }
  const email = e.target.email.value;
  const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!regex.test(email)) {
    alert("Please enter a valid Gmail address (e.g., aruljk002@gmail.com)");
    return;
  }

  const url = "https://script.google.com/macros/s/AKfycbyG_Lxme0X-rpHX4uxoHmBK5A_v8ow29qrpsazwYpLG0T6OY0-VaJr0x3MBFyqc-eQ/exec";

  const formData = new FormData(form);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.result === "Success") {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Server Error: " + (result.error || "Unknown error"));
      console.error("Server error:", result.error);
    }
  } catch (error) {
    alert("Network Error: " + error.message);
    console.error("Fetch error:", error);
  }

};




  return (
   <section className='contact-sec'>
    <Container>
     <Row>
    <Col md={6}>
    <div>
    <div className="section-intro mb-lg-4" id="sec-intro">
      <div className='hero-wrapper'>
      <div className='hero-left pb-2'>
            <h4 className="intro-title">Contact Us</h4>
            <h2>We speak the good food language</h2>
          </div>
          <p>From set together our divided own saw divided the form god
          seas moveth you will fifth under replenish end</p>
          
          <div className='support-sec pt-5'>
          <ul class="hero-info d-none d-md-block">
          <li>
            <img src={service1} alt=""/>
            <h5>Fast Service</h5>
          </li>
          <li>
            <img src={service2} alt=""/>
            <h5>Fresh Food</h5>
          </li>
          <li>
            <img src={service3} alt=""/>
            <h5>24/7 Support</h5>
          </li>
        </ul>
        </div>
        </div>
    </div>
    
    </div>
    
    </Col>
    <Col md={6}>
    <div className='contact-img'>
      <img src={image1} alt='contact-section'  className="d-block w-100 img-fluid"/>
    </div>
    </Col>
     </Row>
        <div className='form-sec'>
        <div className="row">
        <div className="col-12">
        <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8">
        <form
        className="form-contact contact_form"
        id="contactForm"
        noValidate
        onSubmit={handleSubmit}
>
  <div className="row">
    <div className="col-12">
      <div className="form-group">
        <textarea
          className="form-control w-100"
          name="message"
          id="message"
          cols="30"
          rows="9"
          placeholder="Enter Message"
          required
        ></textarea>
      </div>
    </div>

    <div className="col-sm-6">
      <div className="form-group">
        <input
          className="form-control"
          name="name"
          id="name"
          type="text"
          placeholder="Enter your name"
          required
          pattern="^[A-Za-z\s]+$"
          title="Name should contain only letters"
        />
      </div>
    </div>

   <div className="col-sm-6">
      <div className="form-group">
<input
    className="form-control"
    name="email"
    id="email"
    type="text" 
    pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$"
    placeholder="Enter Gmail address"
    required
    title="Please enter a valid Gmail address (e.g., aruljk002@gmail.com)"
  />
      </div>
    </div>


    <div className="col-sm-6">
      <div className="form-group">
        <input
          className="form-control"
          name="password"
          id="password"
          type="text"
          pattern=".{6,10}"
          title="Password must be between 6 and 10 characters"
          placeholder="Enter your password"
          required
        />
      </div>
    </div>

    <div className="col-sm-6">
      <div className="form-group">
        <input
          className="form-control"
          name="phone"
          id="phone"
          type="text"
          placeholder="Enter phone number"
          required
          pattern="^\d{10}$"
          maxLength={10}
          title="Phone number must be exactly 10 digits"
        />
      </div>
    </div>

    <div className="col-12">
      <div className="form-group">
        <input
          className="form-control"
          name="subject"
          id="subject"
          type="text"
          placeholder="Enter Subject"
          required
        />
      </div>
    </div>
  </div>

  <div className="form-group mt-3">
    <button type="submit" className="button button-contactForm">
      Send Message
    </button>
  </div>
</form>


        </div>

        <div className="col-lg-4">
          <div className="media contact-info">
            <span className="contact-info__icon"><i class="fa fa-home" aria-hidden="true"></i></span>
            <div className="media-body">
              <h5>Buttonwood, California.</h5>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i class="fa fa-tablet" aria-hidden="true"></i></span>
            <div className="media-body">
              <h3><a href="tel:454545654">00 (440) 9865 562</a></h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i class="fa fa-envelope" aria-hidden="true"></i></span>
            <div className="media-body">
              <h3><a href="mailto:support@colorlib.com">support@colorlib.com</a></h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
</div>




    </Container>
  
   </section>
 

  )
}

export default Contact
