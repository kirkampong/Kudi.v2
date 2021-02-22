import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './Contact.css'

import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";


class Contact extends Component {
  componentDidMount() {
    
    const scripts = [
      "/js/main.js",
      "/js/jquery.min.js","js/google-map.js",
      "/js/jquery.validate.min.js",
      "/js/popper.js",
      "/js/bootstrap.min.js",
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4rZ9fFqJDOPlEwGqZfiMWiSGUzeGMJf8&sensor=false"
    ]
    
    scripts.forEach(function(script) {
      const script_ = document.createElement("script");
      script_.src = script
      script_.async = true;
      document.body.appendChild(script_);
    });
    
  }

  render() {
    return (
      <>
        <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row no-gutters mb-5">
                <div class="col-md-7">
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3 class="mb-4">Contact Us</h3>
                    <div id="form-message-warning" class="mb-4"></div> 
                    <div id="form-message-success" class="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="label" for="name">Full Name</label>
                            <input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
                          </div>
                        </div>
                        <div class="col-md-6"> 
                          <div class="form-group">
                            <label class="label" for="email">Email Address</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" for="subject">Subject</label>
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" for="#">Message</label>
                            <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input type="submit" value="Send Message" class="btn btn-primary"/>
                            <div class="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-5 d-flex align-items-stretch">
                  <div id="map">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-map-marker fa-3x"></span>
                    </div>
                    <div class="text">
                      <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-phone fa-3x"></span>
                    </div>
                    <div class="text">
                      <p><span>Phone:</span> <a href="tel://233500256579">+233500256579</a></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span class="fa fa-paper-plane fa-3x"></span>
                    </div>
                    <div class="text">
                      <p><span>Email:</span> <a href="mailto:info@yoursite.com">kudifinance.contact@gmail.com</a></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="dbox w-100 text-center">
                    <div class="icon d-flex align-items-center justify-content-center">
                      <span style={{color: 0x0000ff}}></span>
                      <span class="fa fa-globe fa-3x"></span>
                    </div>
                    <div class="text">
                      <p><span>Website</span> <a href="#">yoursite.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
    );
  }
}
export default Contact;
