import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Card, Badge } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Shipping = () => {
  const title = 'Shipping';
  const description = 'Ecommerce Shipping Page';

  return (
    <>
      <HtmlHead title={title} description={description} />
      {/* Title Start */}
      <div className="page-title-container">
        <NavLink className="muted-link pb-1 d-inline-block hidden breadcrumb-back" to="/">
          <CsLineIcons icon="chevron-left" size="13" />
          <span className="align-middle text-small ms-1">Home</span>
        </NavLink>
        <h1 className="mb-0 pb-0 display-4" id="title">
          {title}
        </h1>
      </div>
      {/* Title End */}

      {/* Courier Services Start */}
      <div className="mb-5">
        <h2 className="small-title">Courier Services</h2>
        <Card className="mb-2">
          <Card.Body>
            <Row className="g-0">
              <Col xs="auto">
                <img src="/img/brand/dhl.webp" className="card-img rounded-md h-100 sh-6 sw-9" alt="thumb" />
              </Col>
              <Col className="ps-4">
                <Row className="mb-1">
                  <Col>
                    <div className="heading text-primary mb-1">DHL</div>
                    <div className="mb-3">Lollipop apple pie lollipop toffee danish powder croissant.</div>
                  </Col>
                  <Col xs="auto">
                    <Button variant="outline-primary" className="btn-icon btn-icon-only">
                      <CsLineIcons icon="gear" />
                    </Button>
                  </Col>
                </Row>
                <div className="mb-3">
                  <div className="text-small text-muted">OPTIONS</div>
                  <div className="text-alternate">Standard Shipping</div>
                  <div className="text-alternate">Priority Shipping</div>
                </div>
                <div className="mb-3">
                  <div className="text-small text-muted">LOCATION</div>
                  <div className="text-alternate">Domestic</div>
                </div>
                <div>
                  <div className="text-small text-muted">STATUS</div>
                  <Badge bg="outline-primary">ACTIVE</Badge>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="mb-2">
          <Card.Body>
            <Row className="g-0">
              <Col xs="auto">
                <img src="/img/brand/fedex.webp" className="card-img rounded-md h-100 sh-6 sw-9" alt="thumb" />
              </Col>
              <Col className="ps-4">
                <Row className="mb-1">
                  <Col>
                    <div className="heading text-primary mb-1">FedEx</div>
                    <div className="mb-3">Dessert gummies soufflé toffee cake. Sesame snaps sesame snaps gummies oat cake sesame snaps.</div>
                  </Col>
                  <Col xs="auto">
                    <Button variant="outline-primary" className="btn-icon btn-icon-only">
                      <CsLineIcons icon="gear" />
                    </Button>
                  </Col>
                </Row>
                <div className="mb-3">
                  <div className="text-small text-muted">OPTIONS</div>
                  <div className="text-alternate">Standard Shipping</div>
                  <div className="text-alternate">Priority Shipping</div>
                </div>
                <div className="mb-3">
                  <div className="text-small text-muted">LOCATION</div>
                  <div className="text-alternate">International</div>
                </div>
                <div>
                  <div className="text-small text-muted">STATUS</div>
                  <Badge bg="outline-primary">ACTIVE</Badge>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card className="opacity-50">
          <Card.Body>
            <Row className="g-0">
              <Col xs="auto">
                <img src="/img/brand/ups.webp" className="card-img rounded-md h-100 sh-6 sw-9" alt="thumb" />
              </Col>
              <Col className="ps-4">
                <Row className="mb-1">
                  <Col>
                    <div className="heading text-primary mb-1">UPSP</div>
                    <div className="mb-3">Chocolate bar tootsie roll pastry icing dragée. Tiramisu danish donut tiramisu biscuit.</div>
                  </Col>
                  <Col xs="auto">
                    <Button variant="outline-primary" className="btn-icon btn-icon-only">
                      <CsLineIcons icon="gear" />
                    </Button>
                  </Col>
                </Row>
                <div className="mb-3">
                  <div className="text-small text-muted">OPTIONS</div>
                  <div className="text-alternate">Standard Shipping</div>
                  <div className="text-alternate">Priority Shipping</div>
                </div>
                <div className="mb-3">
                  <div className="text-small text-muted">LOCATION</div>
                  <div className="text-alternate">International</div>
                </div>
                <div>
                  <div className="text-small text-muted">STATUS</div>
                  <Badge bg="outline-muted">INACTIVE</Badge>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
      {/* Courier Services End */}

      {/* Box Sizes Start */}
      <h2 className="small-title">Box Sizes</h2>
      <Row className="g-2">
        <Col xs="6" xl="3" className="sh-20">
          <Card className="h-100 hover-scale-up position-relative">
            <Card.Body className="text-center">
              <div className="sw-5 sh-5 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl mx-auto">
                <div className="text-white">S</div>
              </div>
              <NavLink to="#" className="heading mt-3 stretched-link">
                Small
              </NavLink>
              <div className="text-extra-small fw-medium text-muted">15x20x5 cm</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="6" xl="3" className="sh-20">
          <Card className="h-100 hover-scale-up position-relative">
            <Card.Body className="text-center">
              <div className="sw-5 sh-5 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl mx-auto">
                <div className="text-white">M</div>
              </div>
              <NavLink to="#" className="heading mt-3 stretched-link">
                Medium
              </NavLink>
              <div className="text-extra-small fw-medium text-muted">25x30x5 cm</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="6" xl="3" className="sh-20">
          <Card className="h-100 hover-scale-up position-relative">
            <Card.Body className="text-center">
              <div className="sw-5 sh-5 mb-3 d-inline-block bg-primary d-flex justify-content-center align-items-center rounded-xl mx-auto">
                <div className="text-white">L</div>
              </div>
              <NavLink to="#" className="heading mt-3 stretched-link">
                Large
              </NavLink>
              <div className="text-extra-small fw-medium text-muted">40x50x15 cm</div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="6" xl="3" className="sh-20">
          <Card className="h-100 hover-scale-up position-relative">
            <Card.Body className="text-center">
              <div className="sw-6 sh-6 p-1 border border-dashed rounded-xl mx-auto">
                <div className="text-white bg-separator w-100 h-100 d-flex justify-content-center align-items-center mx-auto rounded-xl">
                  <CsLineIcons icon="plus" />
                </div>
              </div>
              <NavLink to="#" className="heading mt-3 text-muted stretched-link">
                Add New
              </NavLink>
              <div className="text-extra-small fw-medium text-muted">4 OPTIONS</div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Box Sizes End */}
    </>
  );
};

export default Shipping;
