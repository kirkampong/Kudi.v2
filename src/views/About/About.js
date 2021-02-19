import React from "react";
import './About.css';

// react-bootstrap components
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

function Typography() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Our Team</Card.Title>
              </Card.Header>
              <Card.Body>

                <Row>
                  <Col md="4">
                    <Card>
                      <Card.Header>
                        <p className="card-category description text-center">CEO/CTO: Kirk Ampong </p>
                      </Card.Header>
                      <Card.Body>
                        <div className="team-member">
                          <img class="img-responsive" src={require('./krik.jpg')} />
                        </div>
                      </Card.Body>
                    
                    <Card.Footer>
                      <div class="d-flex justify-content-between">
                        <Button
                          className="btn-social btn-outline btn-round sharrre"
                          id="twitter"
                          variant="twitter"
                          href="https://twitter.com/opanyin_k"
                        >
                          <i className="fab fa-twitter"></i> 
                        </Button>
                        <Button
                          className="btn-social btn-outline btn-round sharrre"
                          id="instagram"
                          variant="instagram"
                          href="https://www.instagram.com/kirko__/"
                        >
                          <i class="fab fa-instagram"></i> 
                        </Button>
                        <Button
                          className="btn-social btn-outline btn-round sharrre"
                          id="linkedin"
                          variant="linkedin"
                          href="https://www.linkedin.com/in/kirkampong"
                        >
                          <i class="fab fa-linkedin-in"></i> 
                        </Button>
                      </div>
                    </Card.Footer>
                   </Card>
                  </Col>


                  <Col md="4">
                    <Card>
                      <Card.Header>
                        <p className="card-category description text-center">COO/PM: Sedinam Worlanyo</p>
                      </Card.Header>
                      <Card.Body>
                        <div className="team-member">
                          <img class="img-responsive" src={require('./sedz.jpg')} />
                        </div>
                      </Card.Body>
                    
                    <Card.Footer>
                      <div class="d-flex justify-content-between">
                        <Button
                          className="btn-social btn-outline btn-round sharrre"
                          id="twitter"
                          variant="twitter"
                          href="https://twitter.com/opanyin_k"
                        >
                          <i className="fab fa-twitter"></i> 
                        </Button>
                        <Button
                          className="btn-social btn-outline btn-round sharrre"
                          id="instagram"
                          variant="instagram"
                          href="https://www.instagram.com/kirko__/"
                        >
                          <i class="fab fa-instagram"></i> 
                        </Button>
                        <Button
                          className="btn-social btn-outline btn-round sharrre"
                          id="linkedin"
                          variant="linkedin"
                          href="https://www.linkedin.com/in/kirkampong"
                        >
                          <i class="fab fa-linkedin-in"></i> 
                        </Button>
                      </div>
                    </Card.Footer>
                   </Card>
                  </Col>

                   <Col md="4">
                    <Card>
                      <Card.Header>
                        <p className="card-category description text-center">CMO/CFO: Joel Ojo</p>
                      </Card.Header>
                      <Card.Body>
                        <div className="team-member">
                          <img class="img-responsive" src={require('./joski.jpg')} />
                        </div>
                      </Card.Body>
                    
                    <Card.Footer>
                      <div class="d-flex justify-content-between">
                        <Button
                          className="btn-social btn-outline btn-round sharrre"
                          id="twitter"
                          variant="twitter"
                          href="https://twitter.com/opanyin_k"
                        >
                          <i className="fab fa-twitter"></i> 
                        </Button>
                        <Button
                          className="btn-social btn-outline btn-round sharrre"
                          id="instagram"
                          variant="instagram"
                          href="https://www.instagram.com/kirko__/"
                        >
                          <i class="fab fa-instagram"></i> 
                        </Button>
                        <Button
                          className="btn-social btn-outline btn-round sharrre"
                          id="linkedin"
                          variant="linkedin"
                          href="https://www.linkedin.com/in/kirkampong"
                        >
                          <i class="fab fa-linkedin-in"></i> 
                        </Button>
                      </div>
                    </Card.Footer>
                   </Card>
                  </Col>



                </Row>


                <div className="typography-line">
                  <h1>
                    <span>Header 1</span>
                    The Life of Light Bootstrap Dashboard React
                  </h1>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Header 2</span>
                    The Life of Light Bootstrap Dashboard React
                  </h2>
                </div>
                <div className="typography-line">
                  <h3>
                    <span>Header 3</span>
                    The Life of Light Bootstrap Dashboard React
                  </h3>
                </div>
                <div className="typography-line">
                  <h4>
                    <span>Header 4</span>
                    The Life of Light Bootstrap Dashboard React
                  </h4>
                </div>
                <div className="typography-line">
                  <h5>
                    <span>Header 5</span>
                    The Life of Light Bootstrap Dashboard React
                  </h5>
                </div>
                <div className="typography-line">
                  <h6>
                    <span>Header 6</span>
                    The Life of Light Bootstrap Dashboard React
                  </h6>
                </div>
                <div className="typography-line">
                  <p>
                    <span>Paragraph</span>I will be the leader of a company that
                    ends up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus. I think
                    that’s a responsibility that I have, to push possibilities,
                    to show people, this is the level that things could be at.
                  </p>
                </div>
                <div className="typography-line">
                  <span>Quote</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br></br>
                      <br></br>
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>
                <div className="typography-line">
                  <span>Muted Text</span>
                  <p className="text-muted">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Primary Text</span>
                  <p className="text-primary">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Info Text</span>
                  <p className="text-info">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Success Text</span>
                  <p className="text-success">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Warning Text</span>
                  <p className="text-warning">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <span>Danger Text</span>
                  <p className="text-danger">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className="typography-line">
                  <h2>
                    <span>Small Tag</span>
                    Header with small subtitle <br></br>
                    <small>Use "small" tag for the headers</small>
                  </h2>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Typography;
