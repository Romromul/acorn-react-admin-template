import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import Clamp from 'components/clamp';

const ServicesHosting = () => {
  const title = 'Hosting';
  const description = 'Service Provider Hosting';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Dragée pudding caramels oat cake icing muffin pudding.</div>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        {/* No Hosting Start */}
        <Card className="mb-5">
          <Card.Body className="sh-50 d-flex align-items-center justify-content-center">
            <div className="text-center">
              <img src="/img/illustration/icon-launch.webp" className="theme-filter" alt="launch" />
              <div className="cta-1">There is no hosting services!</div>
              <div className="cta-3 text-primary mb-4">Would you like to create one?</div>
              <Button variant="primary" size="lg">
                NEW HOSTING
              </Button>
            </div>
          </Card.Body>
        </Card>
        {/* No Hosting End */}

        <Row className="mb-n5">
          {/* Guides Start */}
          <Col xl="4" className="mb-5">
            <h2 className="small-title">Guides</h2>
            <Card className="mb-2 hover-border-primary">
              <Row className="g-0 sh-10">
                <Col xs="auto">
                  <div className="sw-9 sh-9 d-inline-block d-flex justify-content-center align-items-center">
                    <div className="fw-bold text-primary">
                      <CsLineIcons icon="server" />
                    </div>
                  </div>
                </Col>
                <Col>
                  <Card.Body className="d-flex flex-column p-0 pe-4 h-100 justify-content-center">
                    <div className="d-flex flex-column">
                      <NavLink to="/support/knowledge-base" className="stretched-link alternate-link">
                        Add New Volume
                      </NavLink>
                      <div className="text-small text-muted text-truncate">Snaps muffin macaroon.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2 hover-border-primary">
              <Row className="g-0 sh-10">
                <Col xs="auto">
                  <div className="sw-9 sh-9 d-inline-block d-flex justify-content-center align-items-center">
                    <div className="fw-bold text-primary">
                      <CsLineIcons icon="cloud-download" />
                    </div>
                  </div>
                </Col>
                <Col>
                  <Card.Body className="d-flex flex-column p-0 pe-4 h-100 justify-content-center">
                    <div className="d-flex flex-column">
                      <NavLink to="/support/knowledge-base" className="stretched-link alternate-link">
                        Cloud Storage
                      </NavLink>
                      <div className="text-small text-muted text-truncate">Brownie ice cream marshmallow topping.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="hover-border-primary">
              <Row className="g-0 sh-10">
                <Col xs="auto">
                  <div className="sw-9 sh-9 d-inline-block d-flex justify-content-center align-items-center">
                    <div className="fw-bold text-primary">
                      <CsLineIcons icon="shield" />
                    </div>
                  </div>
                </Col>
                <Col>
                  <Card.Body className="d-flex flex-column p-0 pe-4 h-100 justify-content-center">
                    <div className="d-flex flex-column">
                      <NavLink to="/support/knowledge-base" className="stretched-link alternate-link">
                        Server Security
                      </NavLink>
                      <div className="text-small text-muted text-truncate">Sugar plum gummi bears jujubes.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* Guides End */}

          {/* Extend Your Knowledge Start */}
          <Col xl="8" className="mb-5">
            <h2 className="small-title">Extend Your Knowledge</h2>
            <Row className="g-2 h-lg-100-card">
              <Col lg="6" className="h-100">
                <Card className="h-100">
                  <Card.Body>
                    <div className="cta-3">Need more details?</div>
                    <div className="mb-3 cta-3 text-primary">Read the docs!</div>
                    <Clamp tag="span" clamp="3" className="text-muted mb-4">
                      Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake
                      icing. Danish wafer donut cookie caramels gummies topping.
                    </Clamp>
                    <Button variant="outline-primary" className="btn-icon btn-icon-start sw-15 stretched-link">
                      <CsLineIcons icon="file-text" /> <span>Docs</span>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="6" className="h-100">
                <Card className="h-100">
                  <Card.Body>
                    <div className="cta-3">Have a specific issue?</div>
                    <div className="mb-3 cta-3 text-primary">Check the forums!</div>
                    <Clamp tag="span" clamp="3" className="text-muted mb-4">
                      Dragée caramels tiramisu icing cotton candy apple pie brownie. Cotton candy gummi bears chocolate candy canes cheesecake candy canes cake
                      danish chocolate. Cake gummi bears caramels powder cotton candy.
                    </Clamp>
                    <Button variant="outline-primary" className="btn-icon btn-icon-start sw-15 stretched-link">
                      <CsLineIcons icon="diagram-2" /> <span>Forums</span>
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          {/* Extend Your Knowledge End */}
        </Row>
      </Col>
    </>
  );
};

export default ServicesHosting;
