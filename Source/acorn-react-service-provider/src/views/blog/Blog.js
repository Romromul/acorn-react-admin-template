import React from 'react';
import { Row, Col, Card, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HtmlHead from 'components/html-head/HtmlHead';
import Clamp from 'components/clamp';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const Blog = () => {
  const title = 'Blog';
  const description = 'Service Provider Blog';

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Col>
        {/* Title Start */}
        <div className="page-title-container mb-3">
          <Row>
            <Col className="mb-2">
              <h1 className="mb-2 pb-0 display-4">{title}</h1>
              <div className="text-muted font-heading text-small">Cake gummi bears caramels powder cotton candy.</div>
            </Col>
          </Row>
        </div>
        {/* Title End */}

        <Row>
          <Col xxl="8" className="mb-5">
            {/* List Start */}
            <Card className="mb-5">
              <NavLink to="#">
                <img src="/img/blog/blog-image-1.webp" className="card-img-top sh-35 theme-filter" alt="card image" />
              </NavLink>
              <Card.Body>
                <h4 className="mb-3">
                  <NavLink to="#">Basic Introduction to Databases</NavLink>
                </h4>
                <Clamp clamp="2" className="text-alternate mb-0">
                  Jujubes brownie marshmallow apple pie donut ice cream jelly-o jelly-o gummi bears. Tootsie roll chocolate bar dragée bonbon cheesecake icing.
                  Danish wafer donut cookie caramels gummies topping.
                </Clamp>
              </Card.Body>
              <Card.Footer className="border-0 pt-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <div className="d-flex align-items-center">
                      <div className="sw-5 d-inline-block position-relative me-3">
                        <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                      </div>
                      <div className="d-inline-block">
                        <NavLink to="#">Olli Hawkins</NavLink>
                        <div className="text-muted text-small">Development Lead</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6">
                    <Row className="g-0 justify-content-end">
                      <Col xs="auto" className="ps-3">
                        <CsLineIcons icon="eye" size="15" className="text-primary me-1" />
                        <span className="align-middle">421</span>
                      </Col>
                      <Col xs="auto" className="ps-3">
                        <CsLineIcons icon="message" size="15" className="text-primary me-1" />
                        <span className="align-middle">5</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Card className="mb-5">
              <NavLink to="#">
                <img src="/img/blog/blog-image-2.webp" className="card-img-top sh-35 theme-filter" alt="card image" />
              </NavLink>
              <Card.Body>
                <h4 className="mb-3">
                  <NavLink to="#">Javascript API with Examples</NavLink>
                </h4>
                <Clamp clamp="2" className="text-alternate mb-0">
                  Chocolate cake biscuit donut cotton candy soufflé cake macaroon. Halvah chocolate cotton candy sweet roll jelly-o candy danish dragée. Apple
                  pie cotton candy tiramisu biscuit cake muffin tootsie roll bear claw cake. Cupcake cake fruitcake. Powder chocolate bar soufflé gummi bears
                  topping donut.
                </Clamp>
              </Card.Body>
              <Card.Footer className="border-0 pt-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <div className="d-flex align-items-center">
                      <div className="sw-5 d-inline-block position-relative me-3">
                        <img src="/img/profile/profile-2.webp" className="img-fluid rounded-xl" alt="thumb" />
                      </div>
                      <div className="d-inline-block">
                        <NavLink to="#">Lisa Jackson</NavLink>
                        <div className="text-muted text-small">Design Lead</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6">
                    <Row className="g-0 justify-content-end">
                      <Col xs="auto" className="ps-3">
                        <CsLineIcons icon="eye" size="15" className="text-primary me-1" />
                        <span className="align-middle">459</span>
                      </Col>
                      <Col xs="auto" className="ps-3">
                        <CsLineIcons icon="message" size="15" className="text-primary me-1" />
                        <span className="align-middle">73</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Card className="mb-5">
              <NavLink to="#">
                <img src="/img/blog/blog-image-3.webp" className="card-img-top sh-35 theme-filter" alt="card image" />
              </NavLink>
              <Card.Body>
                <h4 className="mb-3">
                  <NavLink to="#">Backend & Frontend Methods</NavLink>
                </h4>
                <Clamp clamp="2" className="text-alternate mb-0">
                  Caramels tart danish jelly lemon drops cotton candy muffin. Icing fruitcake bear claw fruitcake tart ice cream chocolate bar sweet roll.
                  Cupcake gummi bears fruitcake. Fruitcake cake liquorice fruitcake caramels marshmallow lollipop. Chocolate gummies cake sweet. Bonbon donut
                  muffin. Biscuit donut powder sugar plum pastry.
                </Clamp>
              </Card.Body>
              <Card.Footer className="border-0 pt-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <div className="d-flex align-items-center">
                      <div className="sw-5 d-inline-block position-relative me-3">
                        <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                      </div>
                      <div className="d-inline-block">
                        <NavLink to="#">Olli Hawkins</NavLink>
                        <div className="text-muted text-small">Development Lead</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6">
                    <Row className="g-0 justify-content-end">
                      <Col xs="auto" className="ps-3">
                        <CsLineIcons icon="eye" size="15" className="text-primary me-1" />
                        <span className="align-middle">368</span>
                      </Col>
                      <Col xs="auto" className="ps-3">
                        <CsLineIcons icon="message" size="15" className="text-primary me-1" />
                        <span className="align-middle">58</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Card className="mb-5">
              <NavLink to="#">
                <img src="/img/blog/blog-image-4.webp" className="card-img-top sh-35  theme-filter" alt="card image" />
              </NavLink>
              <Card.Body>
                <h4 className="mb-3">
                  <NavLink to="#">Server Security Protocols</NavLink>
                </h4>
                <Clamp clamp="2" className="text-alternate mb-0">
                  Oat cake soufflé gummi bears donut sweet. Gummies chocolate liquorice chocolate cake jelly-o cake. Toffee cupcake gummi bears gummies dragée
                  danish chocolate bar. Jelly-o gingerbread lollipop tootsie roll cupcake sugar plum jelly donut. Soufflé cupcake sesame snaps oat cake.
                  Liquorice jelly powder fruitcake oat cake.
                </Clamp>
              </Card.Body>
              <Card.Footer className="border-0 pt-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <div className="d-flex align-items-center">
                      <div className="sw-5 d-inline-block position-relative me-3">
                        <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl" alt="thumb" />
                      </div>
                      <div className="d-inline-block">
                        <NavLink to="#">Olli Hawkins</NavLink>
                        <div className="text-muted text-small">Development Lead</div>
                      </div>
                    </div>
                  </Col>
                  <Col xs="6">
                    <Row className="g-0 justify-content-end">
                      <Col xs="auto" className="ps-3">
                        <CsLineIcons icon="eye" size="15" className="text-primary me-1" />
                        <span className="align-middle">215</span>
                      </Col>
                      <Col xs="auto" className="ps-3">
                        <CsLineIcons icon="message" size="15" className="text-primary me-1" />
                        <span className="align-middle">15</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
            <Row>
              <Col xs="12" className="text-center">
                <Button size="xl" variant="outline-primary" className="sw-30">
                  Load More
                </Button>
              </Col>
            </Row>
            {/* List End */}
          </Col>
          <Col xxl="4">
            {/* Mailing List Start */}
            <Card className="mb-5">
              <Card.Body>
                <div className="cta-3">Want to hear from us?</div>
                <div className="mb-3 cta-3 text-primary">Join our email list!</div>
                <div className="text-muted mb-3">Cheesecake chocolate carrot cake pie lollipop lemon drops.</div>
                <Form.Control type="email" className="mb-2" placeholder="E-mail" />
                <Button variant="primary" className="btn-icon btn-icon-start">
                  <CsLineIcons icon="chevron-right" /> <span>Join Now</span>
                </Button>
              </Card.Body>
            </Card>
            {/* Mailing List End */}

            {/* Guides Start */}
            <h2 className="small-title">Guides</h2>
            <div className="mb-5">
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
                        <NavLink to="/support/docs/detail" className="stretched-link alternate-link">
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
                        <NavLink to="/support/docs/detail" className="stretched-link alternate-link">
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
                        <NavLink to="/support/docs/detail" className="stretched-link alternate-link">
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
                        <NavLink to="/support/docs/detail" className="stretched-link alternate-link">
                          Track Metrics
                        </NavLink>
                        <div className="text-small text-muted text-truncate">Jujubes candy jelly-o topping.</div>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </div>
            {/* Guides End */}

            {/* Tags Start */}
            <h2 className="small-title">Tags</h2>
            <Card>
              <Card.Body className="mb-n1">
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Food (12)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Baking (3)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Sweet (1)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Molding (3)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Pastry (5)
                </Button>
                <Button size="sm" variant="outline-primary" className="mb-1 me-1">
                  Healthy (7)
                </Button>
              </Card.Body>
            </Card>
            {/* Tags End */}
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Blog;
