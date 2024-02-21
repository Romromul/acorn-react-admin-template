import React from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ServicesDatabaseAdd = () => {
  const title = 'New Database';
  const description = 'Service Provider New Database';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Macaroon dessert tootsie roll powder jelly-o dragée candy canes gummi bears.</div>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        {/* Authentication Start */}
        <h2 className="small-title">Authentication</h2>
        <Card className="mb-5">
          <Card.Body>
            <Form className="mb-n3">
              <div className="mb-3 filled">
                <CsLineIcons icon="tag" />
                <Form.Control type="text" placeholder="Database Name" />
              </div>
              <div className="mb-3 filled">
                <CsLineIcons icon="user" />
                <Form.Control type="text" placeholder="Username" />
              </div>
              <div className="mb-3 filled">
                <CsLineIcons icon="lock-on" />
                <Form.Control type="text" placeholder="Password" />
              </div>
              <div className="mb-3 filled">
                <CsLineIcons icon="server" />
                <Form.Control type="text" placeholder="Engine" />
              </div>
            </Form>
          </Card.Body>
        </Card>
        {/* Authentication End */}

        {/* Type Start */}
        <h2 className="small-title">Type</h2>
        <Row className="g-2 mb-5">
          <Col sm="6" lg="3">
            <label className="form-check custom-card w-100 position-relative p-0 m-0">
              <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="databaseType" />
              <span className="card form-check-label w-100">
                <span className="card-body text-center">
                  <CsLineIcons icon="database" className="cs-icon icon text-primary" />
                  <span className="heading mt-3 text-body text-primary d-block">MongoDB</span>
                  <span className="text-extra-small fw-medium text-muted d-block">12.0.5</span>
                </span>
              </span>
            </label>
          </Col>
          <Col sm="6" lg="3">
            <label className="form-check custom-card w-100 position-relative p-0 m-0">
              <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="databaseType" />
              <span className="card form-check-label w-100">
                <span className="card-body text-center">
                  <CsLineIcons icon="screen" className="cs-icon icon text-primary" />
                  <span className="heading mt-3 text-body text-primary d-block">Redis</span>
                  <span className="text-extra-small fw-medium text-muted d-block">2.11.9</span>
                </span>
              </span>
            </label>
          </Col>
          <Col sm="6" lg="3">
            <label className="form-check custom-card w-100 position-relative p-0 m-0">
              <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="databaseType" />
              <span className="card form-check-label w-100">
                <span className="card-body text-center">
                  <CsLineIcons icon="code" className="cs-icon icon text-primary" />
                  <span className="heading mt-3 text-body text-primary d-block">Neo4j</span>
                  <span className="text-extra-small fw-medium text-muted d-block">16.0.2</span>
                </span>
              </span>
            </label>
          </Col>
          <Col sm="6" lg="3">
            <label className="form-check custom-card w-100 position-relative p-0 m-0">
              <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="databaseType" />
              <span className="card form-check-label w-100">
                <span className="card-body text-center">
                  <CsLineIcons icon="pentagon" className="cs-icon icon text-primary" />
                  <span className="heading mt-3 text-body text-primary d-block">Riak</span>
                  <span className="text-extra-small fw-medium text-muted d-block">12.0.0</span>
                </span>
              </span>
            </label>
          </Col>
        </Row>
        {/* Type End */}

        {/* Plan Start */}
        <h2 className="small-title">Plan</h2>
        <Row className="g-2 mb-5">
          <Col lg="4">
            <label className="form-check custom-card w-100 position-relative p-0 m-0">
              <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="databasePlan" />
              <span className="card form-check-label w-100">
                <span className="card-body text-center">
                  <span className="heading text-body text-primary">Developer</span>
                  <span className="display-4 d-block">$ 3.50</span>
                  <span className="text-small text-muted d-block">User/Month</span>
                </span>
              </span>
            </label>
          </Col>
          <Col lg="4">
            <label className="form-check custom-card w-100 position-relative p-0 m-0">
              <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="databasePlan" />
              <span className="card form-check-label w-100">
                <span className="card-body text-center">
                  <span className="heading text-body text-primary">Team</span>
                  <span className="display-4 d-block">$ 7.25</span>
                  <span className="text-small text-muted d-block">User/Month</span>
                </span>
              </span>
            </label>
          </Col>
          <Col lg="4">
            <label className="form-check custom-card w-100 position-relative p-0 m-0">
              <input type="radio" className="form-check-input position-absolute e-2 t-2 z-index-1" name="databasePlan" />
              <span className="card form-check-label w-100">
                <span className="card-body text-center">
                  <span className="heading text-body text-primary">Company</span>
                  <span className="display-4 d-block">$ 12.75</span>
                  <span className="text-small text-muted d-block">User/Month</span>
                </span>
              </span>
            </label>
          </Col>
        </Row>

        <div className="text-center">
          <div className="shadow d-inline-block">
            <Button variant="outline-primary" className="btn-icon btn-icon-only me-1">
              <CsLineIcons icon="save" />
            </Button>
            <Button variant="primary" className="btn-icon btn-icon-end" size="lg">
              <span>Create</span>
              <CsLineIcons icon="chevron-right" />
            </Button>
          </div>
        </div>
        {/* Plan End */}
      </Col>
    </>
  );
};

export default ServicesDatabaseAdd;
