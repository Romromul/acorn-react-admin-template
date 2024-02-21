import React from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const DashboardGettingStarted = () => {
  const title = 'Getting Started';
  const description = 'Service Provider Getting Started';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Let us manage the database engines for your applications so you can focus on building.</div>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        <Row>
          {/* Introduction Banner Start */}
          <Col lg="8" className="mb-5">
            <Card className="sh-45 h-lg-100 position-relative bg-theme">
              <img src="/img/illustration/database.webp" className="card-img h-100 position-absolute theme-filter" alt="card image" />
              <div className="card-img-overlay d-flex flex-column justify-content-end bg-transparent">
                <div className="mb-4">
                  <div className="cta-1 mb-2 w-75 w-sm-50">Introduction to Cloud</div>
                  <div className="w-50 text-alternate">Lollipop chocolate marzipan marshmallow gummi bears. Tootsie roll liquorice cake jelly beans.</div>
                </div>
                <div>
                  <NavLink to="/services/database" className="btn btn-icon btn-icon-start btn-primary mt-3 stretched-link">
                    <CsLineIcons icon="chevron-right" />
                    <span>Getting Started</span>
                  </NavLink>
                </div>
              </div>
            </Card>
          </Col>
          {/* Introduction Banner End */}

          {/* Introduction List Start */}
          <Col lg="4" className="mb-5">
            <Card className="mb-2 hover-border-primary">
              <Row className="g-0 sh-9">
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
                      <NavLink to="/services/database/add" className="stretched-link alternate-link">
                        Add New Volume
                      </NavLink>
                      <div className="text-small text-muted text-truncate">Snaps muffin macaroon.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2 hover-border-primary">
              <Row className="g-0 sh-9">
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
                      <NavLink to="/services/database/add" className="stretched-link alternate-link">
                        Cloud Storage
                      </NavLink>
                      <div className="text-small text-muted text-truncate">Brownie ice cream marshmallow topping.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="mb-2 hover-border-primary">
              <Row className="g-0 sh-9">
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
                      <NavLink to="/services/database/add" className="stretched-link alternate-link">
                        Server Security
                      </NavLink>
                      <div className="text-small text-muted text-truncate">Sugar plum gummi bears jujubes.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
            <Card className="hover-border-primary">
              <Row className="g-0 sh-9">
                <Col xs="auto">
                  <div className="sw-9 sh-9 d-inline-block d-flex justify-content-center align-items-center">
                    <div className="fw-bold text-primary">
                      <CsLineIcons icon="chart-4" />
                    </div>
                  </div>
                </Col>
                <Col>
                  <Card.Body className="d-flex flex-column p-0 pe-4 h-100 justify-content-center">
                    <div className="d-flex flex-column">
                      <NavLink to="/services/database/add" className="stretched-link alternate-link">
                        Track Metrics
                      </NavLink>
                      <div className="text-small text-muted text-truncate">Jujubes candy jelly-o topping.</div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          {/* Introduction List End */}
        </Row>

        {/* Guildes Start  */}
        <h2 className="small-title">Guides</h2>
        <Row className="g-2 row-cols-1 row-cols-xl-2 row-cols-xxl-4 mb-5">
          <Col>
            <Card className="h-100">
              <Card.Body>
                <div className="text-center">
                  <img src="/img/illustration/icon-launch.webp" className="theme-filter" alt="launch" />
                  <div className="d-flex flex-column sh-5">
                    <NavLink to="/support/knowledge-base" className="heading stretched-link">
                      Application Launch
                    </NavLink>
                  </div>
                </div>
                <div className="text-muted">Chocolate cake marshmallow bear claw sweet. Apple pie macaroon sesame snaps candy jelly pudding.</div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <div className="text-center">
                  <img src="/img/illustration/icon-performance.webp" className="theme-filter" alt="performance" />
                  <div className="d-flex flex-column sh-5">
                    <NavLink to="/support/knowledge-base" className="heading stretched-link">
                      Performance Tweaks
                    </NavLink>
                  </div>
                </div>
                <div className="text-muted">Cheesecake chocolate carrot cake pie lollipop lemon drops toffee lollipop.</div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <div className="text-center">
                  <img src="/img/illustration/icon-configure.webp" className="theme-filter" alt="configure" />
                  <div className="d-flex flex-column sh-5">
                    <NavLink to="/support/knowledge-base" className="heading stretched-link">
                      Advanced Configuration
                    </NavLink>
                  </div>
                </div>
                <div className="text-muted">Sweet roll apple pie tiramisu bonbon sugar plum muffin sesame snaps chocolate. Lollipop halvah powder.</div>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Body>
                <div className="text-center">
                  <img src="/img/illustration/icon-analytics.webp" className="theme-filter" alt="analytics" />
                  <div className="d-flex flex-column sh-5">
                    <NavLink to="/support/knowledge-base" className="heading stretched-link">
                      Server Analytics
                    </NavLink>
                  </div>
                </div>
                <div className="text-muted">Cake tart apple pie bear bonbon sugar plum muffin sesame snaps sweet roll gingerbread bonbon sugar.</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* Guildes End */}

        <Row className="mb-n5">
          {/* Help Start */}
          <Col xxl="4" className="mb-5">
            <h2 className="small-title">Help</h2>
            <Card className="h-100-card">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <div className="cta-3">Do you need help?</div>
                  <div className="mb-3 cta-3 text-primary">Search for documentation!</div>
                  <div className="text-muted mb-4">Cheesecake chocolate carrot cake pie cream.</div>
                </div>
                <Form>
                  <div className="mb-3 filled">
                    <CsLineIcons icon="help" />
                    <Form.Control type="text" placeholder="Keyword" />
                  </div>
                  <Button variant="outline-primary" className="btn-icon btn-icon-start">
                    <CsLineIcons icon="chevron-right" /> <span>Search</span>
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          {/* Help End */}

          {/* Video Guide Start */}
          <Col xxl="8" className="mb-5">
            <h2 className="small-title">Videos</h2>
            <Row className="g-2">
              <Col lg="6">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-1.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">16:22</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Database Basics
                          </NavLink>
                          <div className="text-small text-muted text-truncate">Icing liquorice oat roll chocolate cake bar marzipan marzipan carrot.</div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col lg="6">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-2.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">10:05</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Shared Storage
                          </NavLink>
                          <div className="text-small text-muted text-truncate">
                            Jujubes cream toffee candy jelly chups jujubes muffin chupa chups carrot cake chupa.
                          </div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col lg="6">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-3.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">12:20</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Javascript Api
                          </NavLink>
                          <div className="text-small text-muted text-truncate">Candy jelly chups jujubes Cookie cream toffee cream chocolate.</div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col lg="6">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-4.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">24:00</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Frontend Methods
                          </NavLink>
                          <div className="text-small text-muted text-truncate">Jelly chups jujubes chocolate bar pastry oat cake cream.</div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col lg="6">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-5.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">16:50</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Backend Methods
                          </NavLink>
                          <div className="text-small text-muted text-truncate">Cookie cream toffee cream chocolate.</div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col lg="6">
                <Card>
                  <Row className="g-0 sh-11">
                    <Col xs="auto" className="h-100">
                      <img src="/img/video/video-thumbnail-6.webp" alt="alternate text" className="card-img card-img-horizontal sw-11 sw-md-14 theme-filter" />
                      <div className="position-absolute bg-foreground opacity-75 text-primary px-1 py-1 text-extra-small b-2 s-2 rounded-lg">08:30</div>
                    </Col>
                    <Col>
                      <Card.Body className="d-flex flex-column pt-0 pb-0 h-100 justify-content-center">
                        <div className="d-flex flex-column">
                          <NavLink to="/blog" className="font-heading body-link stretched-link">
                            Data Analysis
                          </NavLink>
                          <div className="text-small text-muted text-truncate">Liquorice bar chocolate bar pastry oat cake cream.</div>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
          {/* Video Guide End */}
        </Row>
      </Col>
    </>
  );
};

export default DashboardGettingStarted;
