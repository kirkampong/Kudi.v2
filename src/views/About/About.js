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
                <Card.Title as="h2">
                  Kudi
                  <br></br>
                  <small>Send, Buy, Save & Earn Crypto</small>
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <br></br>
                <div className="content mr-auto ml-auto" style={{ width: "330px" }}>
                  <img class="img-responsive mx-auto" src={require('./kudi-logo.png')} />
                </div>
                <h4 className="text-center">What is Kudi ?</h4>
                <p className="text-muted text-center">
                  Kudi is your one stop shop for your crypto needs. It offers a simple and easy user experience 
                  for digital currency users of all bacgrounds. Save, Send, Invest & Earn all your favorite digital currencies,
                  including Kudi-Africa's first global digital currency!
                </p>
                <hr></hr>

                <h4>Save & Earn:</h4>
                <p className="text-muted">
                  Deposit your Kudi, Bitcoin, Ethereum, Binance Coin or Cardano in our Virtual <span className="font-weight-bold">Bank</span>, and withdraw all your digital currency at any time. 
                  Everyday you save with us you earn interest in Kudi Coin (KDC) as a reward. We are working on rewarding our customers in Bitcoin
                  and Ethereum.
                </p>
                <h4>Send:</h4>
                <p className="text-muted">
                  With access to your personal <span className="font-weight-bold">Wallet</span>, view your balance and Send Kudi, Bitcoin, Ethereum, Binance Coin, 
                  or Cardano instantly using your recepient's digital wallet address.
                </p>

                <hr></hr>
                <h4 className="text-primary">Coming Soon...</h4>

                <p className="text-muted">
                  <span className="font-weight-bold">Buy</span>:
                  Purchase Kudi, Bitcoin, Ethereum, Binance Coin, or Cardano using Naira or Cedis.
                </p>
                <p className="text-muted">
                  <span className="font-weight-bold">Kudi Finance</span>:
                  Africa's first decentralized digital currency platform. Lend & Borrow digital currency, 
                  and invest in Individuals and small & medium enterprises across Africa
                </p>

                <hr></hr>
                <blockquote>
                  <p className="text-secondary">
                    "I expect great things from Kudi in the future. The possibilities are endless!"
                    <br></br>
                    <small>- Kevin Harlley</small>
                  </p>
                </blockquote>
              </Card.Body>

            </Card>
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
                        <p className="card-category description text-center">Snr Engineer/PM: Kevin Harlley</p>
                      </Card.Header>
                      <Card.Body>
                        <div className="team-member">
                          <img class="img-responsive" src={require('./kflex.jpg')} />
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
                  


                  
                 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Typography;
