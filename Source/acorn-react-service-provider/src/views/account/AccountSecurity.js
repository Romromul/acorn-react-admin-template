import React from 'react';
import { Row, Col, Card, Badge, Button, Pagination } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const AccountSecurity = () => {
  const title = 'Security';
  const description = 'Service Provider Security';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Tart jelly beans lollipop lollipop candy liquorice.</div>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        {/* Secure Your Account Start */}
        <h2 className="small-title">Secure Your Account</h2>
        <Row className="row-cols-1 row-cols-xl-2 g-2 mb-5">
          <Col>
            <Card>
              <Badge bg="outline-primary" className="me-1 position-absolute s-3 t-3 z-index-1">
                <CsLineIcons icon="check" size="15" />
              </Badge>
              <Card.Body>
                <Row className="g-0">
                  <Col xs="12" sm="auto" className="pe-4 d-flex justify-content-center">
                    <img src="/img/illustration/icon-email.webp" className="theme-filter" alt="email icon" />
                  </Col>
                  <Col xs="12" className="col-sm">
                    <NavLink to="#" className="heading mb-2 d-inline-block">
                      Secondary Email Address
                    </NavLink>
                    <p>
                      <span className="text-small text-muted">ACTIVE ADDRESS</span>
                      <br />
                      joissekaycee@gmail.com
                    </p>
                    <Button variant="outline-primary" className="btn-icon btn-icon-start mt-1">
                      <CsLineIcons icon="edit-square" /> <span>Edit</span>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Badge bg="outline-primary" className="me-1 position-absolute s-3 t-3 z-index-1">
                <CsLineIcons icon="check" size="15" />
              </Badge>
              <Card.Body>
                <Row className="g-0">
                  <Col xs="12" sm="auto" className="pe-4 d-flex justify-content-center">
                    <img src="/img/illustration/access-token.webp" className="theme-filter" alt="email icon" />
                  </Col>
                  <Col xs="12" className="col-sm">
                    <NavLink to="#" className="heading mb-2 d-inline-block">
                      Two-factor Authentication
                    </NavLink>
                    <p>
                      <span className="text-small text-muted">ACTIVE NUMBER</span>
                      <br />
                      +644 388 44 55
                    </p>
                    <Button variant="outline-primary" className="btn-icon btn-icon-start mt-1">
                      <CsLineIcons icon="edit-square" /> <span>Edit</span>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Badge bg="outline-separator" className="me-1 position-absolute s-3 t-3 z-index-1">
                <CsLineIcons icon="check" size="15" />
              </Badge>
              <Card.Body>
                <Row className="g-0">
                  <Col xs="12" sm="auto" className="pe-4 d-flex justify-content-center">
                    <img src="/img/illustration/icon-accounts.webp" className="theme-filter" alt="email icon" />
                  </Col>
                  <Col xs="12" className="col-sm">
                    <NavLink to="#" className="heading mb-2 d-inline-block">
                      Security Questions
                    </NavLink>
                    <p>Caramels sesame snaps apple pie fruitcake cheesecake topping lemon drops gummi bears icing.</p>
                    <Button variant="outline-primary" className="btn-icon btn-icon-start mt-1">
                      <CsLineIcons icon="chevron-right" /> <span>Enable</span>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Badge bg="outline-separator" className="me-1 position-absolute s-3 t-3 z-index-1">
                <CsLineIcons icon="check" size="15" />
              </Badge>
              <Card.Body>
                <Row className="g-0">
                  <Col xs="12" sm="auto" className="pe-4 d-flex justify-content-center">
                    <img src="/img/illustration/icon-phone.webp" className="theme-filter" alt="email icon" />
                  </Col>
                  <Col xs="12" className="col-sm">
                    <NavLink to="#" className="heading mb-2 d-inline-block">
                      Sign in via Phone
                    </NavLink>
                    <p>Soufflé oat cake tiramisu cake lollipop jelly. Chocolate chupa chups liquorice.</p>
                    <Button variant="outline-primary" className="btn-icon btn-icon-start mt-1">
                      <CsLineIcons icon="chevron-right" /> <span>Enable</span>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Secure Your Account End */}

        {/* Security Logs Start */}
        <h2 className="small-title">Security Logs</h2>
        <Card>
          <Card.Body>
            <div className="mb-2 bg-transparent no-shadow d-none d-md-block g-0 sh-3">
              <Row className="g-0 h-100 align-content-center">
                <Col md="5" className="d-flex align-items-center mb-2 mb-md-0 text-muted text-small">
                  TITLE
                </Col>
                <Col xs="6" md="3" className="d-flex align-items-center text-alternate text-medium text-muted text-small">
                  IP
                </Col>
                <Col xs="6" md="2" className="d-flex align-items-center text-alternate text-medium text-muted text-small">
                  TIME
                </Col>
                <Col xs="6" md="2" className="d-flex align-items-center text-alternate text-medium justify-content-end text-muted text-small">
                  ACTION
                </Col>
              </Row>
            </div>
            <div className="mb-5 border-last-none">
              <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-0">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-alternate">Password Change</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-2">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <div className="text-alternate">241.157.15.24</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3">
                  <div className="text-muted text-small d-md-none">Time</div>
                  <div className="text-alternate">21.03.2021 - 16:10</div>
                </Col>
                <Col xs="2" md="1" className="d-flex flex-column justify-content-center align-items-end mb-2 mb-md-0 order-1 order-md-4">
                  <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
              <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-0">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-alternate">View Invoice</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-2">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <div className="text-alternate">211.562.0.184</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3">
                  <div className="text-muted text-small d-md-none">Time</div>
                  <div className="text-alternate">21.03.2021 - 15:42</div>
                </Col>
                <Col xs="2" md="1" className="d-flex flex-column justify-content-center align-items-end mb-2 mb-md-0 order-1 order-md-4">
                  <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
              <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-0">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-alternate">Logouıt</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-2">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <div className="text-alternate">195.234.11.94</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3">
                  <div className="text-muted text-small d-md-none">Time</div>
                  <div className="text-alternate">20.03.2021 - 10:22</div>
                </Col>
                <Col xs="2" md="1" className="d-flex flex-column justify-content-center align-items-end mb-2 mb-md-0 order-1 order-md-4">
                  <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
              <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-0">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-alternate">Verification Code Sent</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-2">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <div className="text-alternate">195.234.11.94</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3">
                  <div className="text-muted text-small d-md-none">Time</div>
                  <div className="text-alternate">18.03.2021 - 12:50</div>
                </Col>
                <Col xs="2" md="1" className="d-flex flex-column justify-content-center align-items-end mb-2 mb-md-0 order-1 order-md-4">
                  <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
              <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-0">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-alternate">Password Change</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-2">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <div className="text-alternate">195.234.11.94</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3">
                  <div className="text-muted text-small d-md-none">Time</div>
                  <div className="text-alternate">07.02.2021 - 11:10</div>
                </Col>
                <Col xs="2" md="1" className="d-flex flex-column justify-content-center align-items-end mb-2 mb-md-0 order-1 order-md-4">
                  <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
              <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-0">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-alternate">New Database</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-2">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <div className="text-alternate">153.205.03.11</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3">
                  <div className="text-muted text-small d-md-none">Time</div>
                  <div className="text-alternate">06.02.2021 - 09:25</div>
                </Col>
                <Col xs="2" md="1" className="d-flex flex-column justify-content-center align-items-end mb-2 mb-md-0 order-1 order-md-4">
                  <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
              <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-0">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-alternate">Secondary Email Enable</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-2">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <div className="text-alternate">241.157.15.24</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3">
                  <div className="text-muted text-small d-md-none">Time</div>
                  <div className="text-alternate">05.02.2021 - 17:53</div>
                </Col>
                <Col xs="2" md="1" className="d-flex flex-column justify-content-center align-items-end mb-2 mb-md-0 order-1 order-md-4">
                  <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
              <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-0">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-alternate">Login</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-2">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <div className="text-alternate">241.157.15.02</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3">
                  <div className="text-muted text-small d-md-none">Time</div>
                  <div className="text-alternate">28.01.2021 - 19:11</div>
                </Col>
                <Col xs="2" md="1" className="d-flex flex-column justify-content-center align-items-end mb-2 mb-md-0 order-1 order-md-4">
                  <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
              <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-0">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-alternate">Logout</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-2">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <div className="text-alternate">241.157.15.24</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3">
                  <div className="text-muted text-small d-md-none">Time</div>
                  <div className="text-alternate">27.01.2021 - 08:27</div>
                </Col>
                <Col xs="2" md="1" className="d-flex flex-column justify-content-center align-items-end mb-2 mb-md-0 order-1 order-md-4">
                  <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
              <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-0">
                  <div className="text-muted text-small d-md-none">Title</div>
                  <div className="text-alternate">Api Key Generated</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-2">
                  <div className="text-muted text-small d-md-none">Ip</div>
                  <div className="text-alternate">241.157.15.24</div>
                </Col>
                <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-2 mb-md-0 order-3">
                  <div className="text-muted text-small d-md-none">Time</div>
                  <div className="text-alternate">26.01.2021 - 12:40</div>
                </Col>
                <Col xs="2" md="1" className="d-flex flex-column justify-content-center align-items-end mb-2 mb-md-0 order-1 order-md-4">
                  <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                    <CsLineIcons icon="more-horizontal" />
                  </Button>
                </Col>
              </Row>
            </div>
            <nav>
              <Pagination className="justify-content-center semibordered">
                <Pagination.Prev disabled>
                  <CsLineIcons icon="chevron-left" />
                </Pagination.Prev>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.Next>
                  <CsLineIcons icon="chevron-right" />
                </Pagination.Next>
              </Pagination>
            </nav>
          </Card.Body>
        </Card>
        {/* Security Logs End */}
      </Col>
    </>
  );
};

export default AccountSecurity;
