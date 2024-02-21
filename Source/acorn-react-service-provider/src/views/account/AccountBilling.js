import React from 'react';
import { Row, Col, Card, Form, Button, Badge, Pagination } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const AccountBilling = () => {
  const title = 'Billing';
  const description = 'Service Provider Billing';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Row>
        <Col>
          {/* Title Start */}
          <div className="page-title-container mb-3">
            <Row>
              <Col className="mb-2">
                <h1 className="mb-2 pb-0 display-4">{title}</h1>
                <div className="text-muted font-heading text-small">Topping tootsie roll sesame snaps icing lollipop tart pie.</div>
              </Col>
            </Row>
          </div>
          {/* Title End */}

          <Row>
            {/* Status Start */}
            <Col xxl="8" className="mb-5">
              <h2 className="small-title">Status</h2>
              <Row className="g-2">
                <Col md="6">
                  <Card>
                    <Card.Body className="h-100 py-5 align-items-center">
                      <Row className="g-0">
                        <Col xs="auto">
                          <div className="bg-gradient-light sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="dollar" className="text-white" />
                          </div>
                        </Col>
                        <Col>
                          <div className="sh-5 d-flex align-items-center lh-1-25 ps-3">This Months Estimated Cost</div>
                        </Col>
                        <Col xs="auto" className="d-flex align-items-center">
                          <div className="cta-2 text-primary">$26.75</div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card>
                    <Card.Body className="h-100 py-5 align-items-center">
                      <Row className="g-0">
                        <Col xs="auto">
                          <div className="bg-gradient-light sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="board-2" className="text-white" />
                          </div>
                        </Col>
                        <Col>
                          <div className="sh-5 d-flex align-items-center lh-1-25 ps-3">Usage Over Budget</div>
                        </Col>
                        <Col xs="auto" className="d-flex align-items-center">
                          <div className="cta-2 text-primary">$5.25</div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card>
                    <Card.Body className="h-100 py-5 align-items-center">
                      <Row className="g-0">
                        <Col xs="auto">
                          <div className="bg-gradient-light sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="calendar" className="text-white" />
                          </div>
                        </Col>
                        <Col>
                          <div className="sh-5 d-flex align-items-center lh-1-25 ps-3">Monthly Billing Day</div>
                        </Col>
                        <Col xs="auto" className="d-flex align-items-center">
                          <div className="cta-2 text-primary">19th</div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md="6">
                  <Card>
                    <Card.Body className="h-100 py-5 align-items-center">
                      <Row className="g-0">
                        <Col xs="auto">
                          <div className="bg-gradient-light sw-5 sh-5 rounded-xl d-flex justify-content-center align-items-center">
                            <CsLineIcons icon="wallet" className="text-white" />
                          </div>
                        </Col>
                        <Col>
                          <div className="sh-5 d-flex align-items-center lh-1-25 ps-3">Active Payment Methods</div>
                        </Col>
                        <Col xs="auto" className="d-flex align-items-center">
                          <div className="cta-2 text-primary">4</div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
            {/* Status End */}

            {/* Promo Code Start */}
            <Col xxl="4" className="mb-5">
              <h2 className="small-title">Promo Code</h2>
              <Card className="h-100-card">
                <Card.Body className="h-100">
                  <Row className="g-0">
                    <Col sm="auto" className="pe-4 d-flex justify-content-center">
                      <img src="/img/illustration/icon-integrate.webp" alt="integrate" className="theme-filter" />
                    </Col>
                    <Col xs="12" className="col-sm">
                      <p>If you have a promo code, you may apply here!</p>
                      <Form>
                        <div className="mb-2 filled">
                          <CsLineIcons icon="invoice" />
                          <Form.Control type="text" placeholder="Code" />
                        </div>
                        <Button variant="outline-primary" className="btn-icon btn-icon-start">
                          <CsLineIcons icon="chevron-right" /> <span>Apply</span>
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            {/* Promo Code End */}
          </Row>

          {/* Payment Methods Start */}
          <h2 className="small-title">Payment Methods</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="border-last-none mb-4">
                <Row className="g-0 align-items-start align-content-start align-content-md-center align-items-md-center border-bottom border-separator-light pb-2 mb-2">
                  <Col xs="11" md="5" className="d-flex flex-column pe-2 mb-2 mb-md-0 order-1">
                    <div>xxxx-xxxx-xxxx-4294</div>
                    <div className="text-muted text-small">Visa</div>
                  </Col>
                  <Col xs="auto" md="3" className="d-flex flex-column align-items-start align-items-md-end pe-3 order-3">
                    23.05.2021
                  </Col>
                  <Col xs="auto" md="2" className="d-flex flex-column align-items-start align-items-md-end order-4">
                    <Badge bg="outline-primary">ACTIVE</Badge>
                  </Col>
                  <Col xs="1" md="2" className="d-flex flex-column align-items-start align-items-md-end order-2 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="more-horizontal" />
                    </Button>
                  </Col>
                </Row>
                <Row className="g-0 align-items-start align-content-start align-content-md-center align-items-md-center border-bottom border-separator-light pb-2 mb-2">
                  <Col xs="11" md="5" className="d-flex flex-column pe-2 mb-2 mb-md-0 order-1">
                    <div>xxxx-xxxx-xxxx-2901</div>
                    <div className="text-muted text-small">Visa</div>
                  </Col>
                  <Col xs="auto" md="3" className="d-flex flex-column align-items-start align-items-md-end pe-3 order-3">
                    12.04.2021
                  </Col>
                  <Col xs="auto" md="2" className="d-flex flex-column align-items-start align-items-md-end order-4">
                    <Badge bg="outline-primary">ACTIVE</Badge>
                  </Col>
                  <Col xs="1" md="2" className="d-flex flex-column align-items-start align-items-md-end order-2 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="more-horizontal" />
                    </Button>
                  </Col>
                </Row>
                <Row className="g-0 align-items-start align-content-start align-content-md-center align-items-md-center border-bottom border-separator-light pb-2 mb-2">
                  <Col xs="11" md="5" className="d-flex flex-column pe-2 mb-2 mb-md-0 order-1">
                    <div>joissekaycee@gmail.com</div>
                    <div className="text-muted text-small">Paypal</div>
                  </Col>
                  <Col xs="auto" md="3" className="d-flex flex-column align-items-start align-items-md-end pe-3 order-3">
                    12.04.2021
                  </Col>
                  <Col xs="auto" md="2" className="d-flex flex-column align-items-start align-items-md-end order-4">
                    <Badge bg="outline-muted">DEACTIVE</Badge>
                  </Col>
                  <Col xs="1" md="2" className="d-flex flex-column align-items-start align-items-md-end order-2 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="more-horizontal" />
                    </Button>
                  </Col>
                </Row>
              </div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start">
                <CsLineIcons icon="plus" /> <span>Add New</span>
              </Button>
            </Card.Body>
          </Card>
          {/* Payment Methods End */}

          {/* Billing Information Start */}
          <h2 className="small-title">Billing Information</h2>
          <Card className="mb-5">
            <Card.Body>
              <div className="mb-4">
                <div className="mb-3">
                  <div className="text-muted text-small mb-1">NAME</div>
                  <div>Joisse Kaycee</div>
                </div>
                <div className="mb-3">
                  <div className="text-muted text-small mb-1">ADDRESS</div>
                  <div>
                    4911 Jehovah Drive
                    <br />
                    Culpeper/Virginia
                    <br />
                    USA
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-muted text-small mb-1">TAX ID</div>
                  <div>161-97-2030</div>
                </div>
              </div>
              <Button variant="outline-primary" className="btn-icon btn-icon-start">
                <CsLineIcons icon="edit-square" /> <span>Edit</span>
              </Button>
            </Card.Body>
          </Card>
          {/* Billing Information End */}

          {/* Payment Logs Start */}
          <h2 className="small-title">Payment Logs</h2>
          <Card>
            <Card.Body>
              <div className="mb-2 bg-transparent no-shadow d-none d-md-block g-0 sh-3">
                <Row className="g-0 h-100 align-content-center">
                  <Col md="5" className="d-flex align-items-center mb-2 mb-md-0 text-muted text-small">
                    TITLE
                  </Col>
                  <Col xs="6" md="3" className="d-flex align-items-center text-alternate text-medium text-muted text-small">
                    AMOUNT
                  </Col>
                  <Col xs="6" md="2" className="d-flex align-items-center text-alternate text-medium text-muted text-small">
                    DATE
                  </Col>
                  <Col xs="6" md="2" className="d-flex align-items-center text-alternate text-medium justify-content-end text-muted text-small">
                    DOWNLOAD
                  </Col>
                </Row>
              </div>
              <div className="mb-5 border-last-none">
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Monthly Payment</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 16.25</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">21.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Overuse Payment</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 8.50</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">17.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Invoice</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 16.25</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">15.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Monthly Payment</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 12.25</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">13.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Overuse Payment</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 4.50</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">11.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Invoice</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 16.25</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">04.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Overuse Payment</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 8.50</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">17.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Invoice</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 16.25</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">15.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Monthly Payment</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 12.25</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">13.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Invoice</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 16.25</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">15.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
                    </Button>
                  </Col>
                </Row>
                <Row className="sh-md-4 g-0 h-100 align-content-center border-bottom border-separator-light pb-3 mb-3">
                  <Col xs="10" md="5" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-1">
                    <div className="text-muted text-small d-md-none">Title</div>
                    <div className="text-alternate">Monthly Payment</div>
                  </Col>
                  <Col xs="10" md="3" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-2">
                    <div className="text-muted text-small d-md-none">Amount</div>
                    <div className="text-alternate">$ 12.25</div>
                  </Col>
                  <Col xs="10" md="2" className="d-flex flex-column justify-content-center mb-1 mb-md-0 order-3">
                    <div className="text-muted text-small d-md-none">Date</div>
                    <div className="text-alternate">13.03.2021</div>
                  </Col>
                  <Col xs="2" md="2" className="d-flex flex-column justify-content-center align-items-end mb-1 mb-md-0 order-1 order-md-4">
                    <Button size="sm" variant="foreground-alternate" className="btn-icon btn-icon-only align-top float-end">
                      <CsLineIcons icon="download" />
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
          {/* Payment Logs End */}
        </Col>
      </Row>
    </>
  );
};

export default AccountBilling;
